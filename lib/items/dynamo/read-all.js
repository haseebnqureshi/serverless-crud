'use strict';

/*
DATA PERSISTENCE LAYER

This layer is strictly dedicated to the handling of data 
persistence to the DB of choice. To be clear, this should 
not have any business logic. This layer should only handle 
the read/write process onto our data persistence.

Note: Assume all variables in `module.exports` are provided,
so no need to conditionally check their existence.
*/

module.exports = (callback, Lib, Details) => {
	
	/*
	Call whichever data service or methods to persist
	your data. Make sure to call your `callback`:

	Function `callback` requires 3 parameters:

	`error` (required)
		-- Can be either a string, object, or an array.
		-- Must be `null` if there is no error.
		-- Non-null value indicates there was an error 
			persisting data.

	`data` (required)
		-- Must be an array of objects.
		-- This allows us to expect the same data type, 
			regardless of the data call.
		-- Must be an empty array if there was no data 
			to return.

	`message` (required)
		-- Must be a string.
		-- If there's something special we should know
			about the data, we can message here.
		-- If no message, return an empty string.

	Note: Keeping these requirements down to the data 
	persistence layer keeps things simple for our business 
	logic layer and for our routers.
	*/

	var dynamoDb = new Lib.AWS.DynamoDB.DocumentClient();

	dynamoDb.scan({
		TableName: Details.TableName,
		ConsistentRead: true
	}, (error, data) => {

		var message = '';
		var data = data || {};
		var results = data.Items || [];

		if (results.length > 1) {
			message = `Okay, found ${results.length} results!`;
		}
		else if (results.length == 1) {
			message = `Okay, found ${results.length} result!`;
		}
		else {
			message = `Sorry, didn't find anything!`;
		}

		return callback(error, results, message);

	});

};
