'use strict';

var uuid = require('uuid');

module.exports = (AWS, Helpers, Details) => {

	var dynamoDb = new AWS.DynamoDB.DocumentClient();
	
	var Create = (event, callback) => {

		var item = Helpers.parseEventBody(event);
		item.id = uuid.v1();
		item.updatedAt = new Date().getTime();

		return dynamoDb.put({
			TableName: Details.TableName,
			Item: item
		}, (error, data) => {

			return Helpers.respond(error, callback, item);
		});
	};

	return Create;

};
