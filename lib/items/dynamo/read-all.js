'use strict';

module.exports = (Lib, Details) => {

	var dynamoDb = new Lib.AWS.DynamoDB.DocumentClient();
	
	var ReadAll = (event, callback) => {

		return dynamoDb.scan({
			TableName: Details.TableName
		}, (error, data) => {

			var data = data || {};
			return Lib.Lambda.respond(error, callback, data.Items);
		});
	};

	return ReadAll;

};
