'use strict';

var Shared = require('shared');

module.exports.create = (event, context, callback) => {
	Shared.Models.Items.Create(event, (err, result, message) => {
		return Shared.Utils.API.easyRespond(result, err, 200, context, message);
	});
};

module.exports.readAll = (event, context, callback) => {
	Shared.Models.Items.ReadAll(event, (err, result, message) => {
		return Shared.Utils.API.easyRespond(result, err, 200, context, message);
	});
};

module.exports.read = (event, context, callback) => {
	Shared.Models.Items.Read(event, (err, result, message) => {
		return Shared.Utils.API.easyRespond(result, err, 200, context, message);
	});
};

module.exports.update = (event, context, callback) => {
	Shared.Models.Items.Update(event, (err, result, message) => {
		return Shared.Utils.API.easyRespond(result, err, 200, context, message);
	});
};

module.exports.delete = (event, context, callback) => {
	Shared.Models.Items.Delete(event, (err, result, message) => {
		return Shared.Utils.API.easyRespond(result, err, 200, context, message);
	});
};
