'use strict';

var Lib = require('lib');

module.exports.create = (event, context, callback) => {
	Lib.Items.Create(event, (err, result, message) => {
		return Lib.ApiHelpers.easyRespond(result, err, 200, context, message);
	});
};

module.exports.readAll = (event, context, callback) => {
	Lib.Items.ReadAll(event, (err, result, message) => {
		return Lib.ApiHelpers.easyRespond(result, err, 200, context, message);
	});
};

module.exports.read = (event, context, callback) => {
	Lib.Items.Read(event, (err, result, message) => {
		return Lib.ApiHelpers.easyRespond(result, err, 200, context, message);
	});
};

module.exports.update = (event, context, callback) => {
	Lib.Items.Update(event, (err, result, message) => {
		return Lib.ApiHelpers.easyRespond(result, err, 200, context, message);
	});
};

module.exports.delete = (event, context, callback) => {
	Lib.Items.Delete(event, (err, result, message) => {
		return Lib.ApiHelpers.easyRespond(result, err, 200, context, message);
	});
};
