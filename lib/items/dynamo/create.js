'use strict';

var uuid = require('uuid');

module.exports = (Lib, Details) => {

	var dynamoDb = new Lib.AWS.DynamoDB.DocumentClient();
	
	var Create = (event, callback) => {

		var item = Lib.Lambda.parseEventBody(event);
		item.id = uuid.v1();
		item.updatedAt = new Date().getTime();

		return dynamoDb.put({
			TableName: Details.TableName,
			Item: item
		}, (error, data) => {

			return Lib.Lambda.respond(error, callback, item);
		});
	};

	return Create;

};
