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

		create: require(`./dynamo/create.js`)(Lib, Details),

		readAll: require(`./dynamo/read-all.js`)(Lib, Details),

		read: require(`./dynamo/read.js`)(Lib, Details),

		update: require(`./dynamo/update.js`)(Lib, Details),

		delete: require(`./dynamo/delete.js`)(Lib, Details)

	};

	return Items;

};
