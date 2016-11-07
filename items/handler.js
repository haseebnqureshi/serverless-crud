'use strict';

var lib = require('lib');

var Helpers = {

	respond: (context, err, result, statusCodeOverride) => {
		var statusCode = 200;
		var body = result;

		if (result.length === 0) {
			statusCode = 400;
		}

		if (err) {
			statusCode = 500;
			body = { err: err };
		}

		if (statusCodeOverride) {
			statusCode = statusCodeOverride;
		}

		var response = {
			statusCode: statusCode,
			body: JSON.stringify(body)
		};

		if (statusCode === 204) {
			response = { statusCode: response.statusCode };
		}

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

		return Helpers.respond(context, err, result, 204);
	});
};
