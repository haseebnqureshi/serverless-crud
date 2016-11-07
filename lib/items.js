'use strict';

var AWS = require('aws-sdk');
var dynamoDb = new AWS.DynamoDB.DocumentClient();
var uuid = require('uuid');

var Helpers = {

	parseEventBody: (event) => {
		return JSON.parse(event.body);
	},

	getTableName: () => {
		return 'items';
	},

	ensureResult: (result) => {
		if (result instanceof Array) {
			return result;
		}
		if (result instanceof Object) {
			return [result];
		}
		if (result === null || result === undefined) { 
			return [{}];
		}
		return [{}];
	},

	respond: (error, callback, result) => {
		return callback(error, Helpers.ensureResult(result) );
	}

};

var Model = {

	create: (event, callback) => {

		var item = Helpers.parseEventBody(event);
		item.id = uuid.v1();
		item.updatedAt = new Date().getTime();

		return dynamoDb.put({
			TableName: Helpers.getTableName(),
			Item: item
		}, (error, data) => {

			return Helpers.respond(error, callback, item);
		});
	},

	readAll: (event, callback) => {

		return dynamoDb.scan({
			TableName: Helpers.getTableName()
		}, (error, data) => {

			var data = data || {};
			return Helpers.respond(error, callback, data.Items);
		});
	},

	read: (event, callback) => {

		return dynamoDb.get({
			TableName: Helpers.getTableName(),
			Key: {
				id: event.pathParameters.id
			}
		}, (error, data) => {

			var data = data || {};
			return Helpers.respond(error, callback, data.Item);
		});
	},

	update: (event, callback) => {

		var updateValues = Helpers.parseEventBody(event);
		updateValues.updatedAt = new Date().getTime();

		var updates = {};
		for (var x in updateValues) {
			updates[x] = {
				Action: 'PUT',
				Value: updateValues[x]
			};
		}

		return dynamoDb.update({
			TableName: Helpers.getTableName(),
			AttributeUpdates: updates,
			Key: {
				id: event.pathParameters.id
			},
			ReturnValues: 'ALL_NEW'
		}, (error, data) => {

			var data = data || {};
			return Helpers.respond(error, callback, data.Item);
		});
	},

	delete: (event, callback) => {
		
		return dynamoDb.delete({
			TableName: Helpers.getTableName(),
			Key: {
				id: event.pathParameters.id
			},
			ReturnValues: 'ALL_OLD'
		}, (error, data) => {

			var data = data || {};
			return Helpers.respond(error, callback, data.Item);
		});
	}

};

module.exports = Model;
