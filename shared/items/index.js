'use strict';

module.exports = (Lib) => {

	var Details = {

		TableName: 'items'

	};

	/*
	We can define different adapters for different data modeling,
	which comes in handy for large scale applications.
	*/

	var Items = {

		Create: require('./create.js')(Lib, Details, 'dynamo'),

		ReadAll: require('./read-all.js')(Lib, Details, 'dynamo'),

		Read: require('./read.js')(Lib, Details, 'dynamo'),

		Update: require('./update.js')(Lib, Details, 'dynamo'),

		Delete: require('./delete.js')(Lib, Details, 'dynamo')

	};

	return Items;

};
