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

	respond: (error, data, callback, item) => {
		
		console.log({
			error: error,
			data: data,
			item: item
		});

		//try and get our result items from data
		var data = data || {};
		var result = data.Items || null;

		//then try and get a singular item from data
		if (result === null) {
			result = [data.Item] || null;
		}

		//override our result logic if 'item' is passed
		if (item !== null) {
			result = [item];
		}

		//and if no 'item' is passed and results is null...
		else if (result === [null]) {

			//let's make sure we have a friendly result
			result = [{}];
		}
	
		return callback(error, result);
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

			return Helpers.respond(error, data, callback, item);
		});
	},

	readAll: (event, callback) => {

		return dynamoDb.scan({
			TableName: Helpers.getTableName()
		}, (error, data) => {

			return Helpers.respond(error, data, callback);
		});
	},

	read: (event, callback) => {

		return dynamoDb.get({
			TableName: Helpers.getTableName(),
			Key: {
				id: event.pathParameters.id
			}
		}, (error, data) => {

			return Helpers.respond(error, data, callback);
		});
	},

	update: (event, callback) => {

		var item = Helpers.parseEventBody(event);
		item.id = event.pathParameters.id;
		item.updatedAt = new Date().getTime();

		return dynamoDb.update({
			TableName: Helpers.getTableName(),
			Item: item
		}, (error, data) => {

			return Helpers.respond(error, data, callback, item);
		});
	},

	delete: (event, callback) => {
		
		return dynamoDb.delete({
			TableName: Helpers.getTableName(),
			Key: {
				id: event.pathParameters.id
			}
		}, (error, data) => {

			return Helpers.respond(error, data, callback);
		});
	}

};

module.exports = Model;
