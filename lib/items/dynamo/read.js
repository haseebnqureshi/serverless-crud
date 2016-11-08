'use strict';

module.exports = (AWS, Helpers, Details) => {

	var dynamoDb = new AWS.DynamoDB.DocumentClient();
	
	var Read = (event, callback) => {

		return dynamoDb.get({
			TableName: Details.TableName,
			Key: {
				id: event.pathParameters.id
			}
		}, (error, data) => {

			var data = data || {};
			return Helpers.respond(error, callback, data.Item);
		});

	};

	return Read;

};
