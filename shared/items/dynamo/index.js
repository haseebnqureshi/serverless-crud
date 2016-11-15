'use strict';

module.exports = (AWS, Helpers) => {

	var Details = {

		TableName: 'items'

	};

	var Items = {

		create: require('./create.js')(AWS, Helpers, Details),

		readAll: require('./read-all.js')(AWS, Helpers, Details),

		read: require('./read.js')(AWS, Helpers, Details),

		update: require('./update.js')(AWS, Helpers, Details),

		delete: require('./delete.js')(AWS, Helpers, Details)

	};

	return Items;

};
