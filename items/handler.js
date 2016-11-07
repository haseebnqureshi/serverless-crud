'use strict';

var lib = require('lib');

var Helpers = {

	respond: (context, err, result) => {
		var statusCode = 200;
		var body = result;

		if (!result) {
			statusCode = 400;
			result = [{}];
		}

		if (result.length == 0) {
			statusCode = 404;
		}

		if (err) {
			statusCode = 500;
			body = { err: err };
		}

		var response = {
			statusCode: statusCode,
			body: JSON.stringify(body)
		};

		return context.succeed(response);
	}

};

module.exports.create = (event, context, callback) => {

	lib.items.create(event, (err, result) => {

		return Helpers.respond(context, err, result);
	});
};

module.exports.readAll = (event, context, callback) => {

	lib.items.readAll(event, (err, result) => {

		return Helpers.respond(context, err, result);
	});
};

module.exports.read = (event, context, callback) => {

	lib.items.read(event, (err, result) => {

		return Helpers.respond(context, err, result);
	});
};

module.exports.update = (event, context, callback) => {

	lib.items.update(event, (err, result) => {

		return Helpers.respond(context, err, result);
	});
};

module.exports.delete = (event, context, callback) => {

	lib.items.delete(event, (err, result) => {

		return Helpers.respond(context, err, result);
	});
};
