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

module.exports = (ItemId, callback, Lib, Details) => {
	
	/*
	Call whichever data service or methods to persist
	your data. Make sure to call your `callback`:

	Function `callback` requires 2 parameters:

	`error`
		-- Can be either a string, object, or an array.
		-- Must be `null` if there is no error.
		-- Non-null value indicates there was an error 
			persisting data.

	`data`
		-- Must be an array of objects.
		-- This allows us to expect the same data type, 
			regardless of the data call.
		-- Must be an empty array if there was no data 
			to return.

	Note: Keeping these requirements down to the data 
	persistence layer keeps things simple for our business 
	logic layer and for our routers.
	*/

	var dynamoDb = new Lib.AWS.DynamoDB.DocumentClient();

	dynamoDb.delete({
		TableName: Details.TableName,
		Key: {
			id: ItemId
		}
	}, (error, data) => {

		return callback(error, [{}]);

	});

};
