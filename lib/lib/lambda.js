'use strict';

module.exports = () => {

	var Helpers = {

		parseEventBody: (event) => {
			return JSON.parse(event.body);
		},

		ensureResult: (result) => {
			if (result instanceof Array) {
				return result;
			}
			if (result instanceof Object) {
				return [result];
			}
			if (result === null || result === undefined) { 
				return [{}];
			}
			return [{}];
		},

		respond: (error, callback, result) => {
			return callback(error, Helpers.ensureResult(result) );
		}

	};

	return Helpers;

};
