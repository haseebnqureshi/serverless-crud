'use strict';

module.exports = () => {

	var Config = require('./config.js')();

	var AWS = require('./aws.js')(Config);

	var AwsHelpers = require('./aws-helpers.js')(Config);

	var ApiHelpers = require('./api-helpers.js')(Config);

	return { Config, AWS, AwsHelpers, ApiHelpers };

};
