'use strict';

module.exports = () => {

	var Config = require('./config.js')();

	var AWS = require('./aws.js')(Config);

	var AWSHelpers = require('./aws-helpers.js')(Config);

	return { Config, AWS, AWSHelpers };

};
