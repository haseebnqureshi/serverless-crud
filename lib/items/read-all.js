'use strict';

module.exports = (AWS, Helpers, Details) => {

	var dynamoDb = new AWS.DynamoDB.DocumentClient();
	
	var ReadAll = (event, callback) => {

		return dynamoDb.scan({
			TableName: Details.TableName
		}, (error, data) => {

			var data = data || {};
			return Helpers.respond(error, callback, data.Items);
		});
	};

	return ReadAll;

};
