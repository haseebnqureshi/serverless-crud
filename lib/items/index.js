'use strict';

module.exports = (AWS, Helpers) => {

	var Details = {

		TableName: 'items'

	};

	/*
	We can define different adapters for different data modeling,
	which comes in handy for large scale applications.
	*/

	var Items = {

		create: require(`./dynamo/create.js`)(AWS, Helpers, Details),

		readAll: require(`./dynamo/read-all.js`)(AWS, Helpers, Details),

		read: require(`./dynamo/read.js`)(AWS, Helpers, Details),

		update: require(`./dynamo/update.js`)(AWS, Helpers, Details),

		delete: require(`./dynamo/delete.js`)(AWS, Helpers, Details)

	};

	return Items;

};
