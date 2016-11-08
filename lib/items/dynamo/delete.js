'use strict';

module.exports = (Lib, Details) => {

	var dynamoDb = new Lib.AWS.DynamoDB.DocumentClient();
	
	var Delete = (event, callback) => {

		return dynamoDb.delete({
			TableName: Details.TableName,
			Key: {
				id: event.pathParameters.id
			},
			ReturnValues: 'ALL_OLD'
		}, (error, data) => {

			var data = data || {};
			return Lib.Lambda.respond(error, callback, data.Item);
		});

	};

	return Delete;

};
