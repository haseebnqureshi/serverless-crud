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

		create: require('./create.js')(Lib, Details, 'dynamo'),

		readAll: require('./read-all.js')(Lib, Details, 'dynamo'),

		read: require('./read.js')(Lib, Details, 'dynamo'),

		update: require('./update.js')(Lib, Details, 'dynamo'),

		delete: require('./delete.js')(Lib, Details, 'dynamo')

	};

	return Items;

};
