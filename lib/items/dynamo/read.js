'use strict';

module.exports = (Lib, Details) => {

	var dynamoDb = new Lib.AWS.DynamoDB.DocumentClient();
	
	var Read = (event, callback) => {

		return dynamoDb.get({
			TableName: Details.TableName,
			Key: {
				id: event.pathParameters.id
			}
		}, (error, data) => {

			var data = data || {};
			return Lib.Lambda.respond(error, callback, data.Item);
		});

	};

	return Read;

};
