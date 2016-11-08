'use strict';

module.exports = (AWS, Helpers, Details) => {

	var dynamoDb = new AWS.DynamoDB.DocumentClient();
	
	var Update = (event, callback) => {

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
			TableName: Details.TableName,
			AttributeUpdates: updates,
			Key: {
				id: event.pathParameters.id
			},
			ReturnValues: 'ALL_NEW'
		}, (error, data) => {

			var data = data || {};
			return Helpers.respond(error, callback, data.Item);
		});

	};

	return Update;

};
