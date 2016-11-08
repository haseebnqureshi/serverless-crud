'use strict';

module.exports = (Config) => {

	var _ = require('underscore');

	var Helpers = {

		toAttributeUpdates: (keyValues) => {
			return _.mapObject(keyValues, function(val, key) {
				return {
					Action: 'PUT',
					Value: val
				}
			});
		}

	};

	return Helpers;

};
