'use strict';

module.exports = (AWS, Helpers, Details) => {

	var dynamoDb = new AWS.DynamoDB.DocumentClient();
	
	var Delete = (event, callback) => {

		return dynamoDb.delete({
			TableName: Details.TableName,
			Key: {
				id: event.pathParameters.id
			},
			ReturnValues: 'ALL_OLD'
		}, (error, data) => {

			var data = data || {};
			return Helpers.respond(error, callback, data.Item);
		});

	};

	return Delete;

};
