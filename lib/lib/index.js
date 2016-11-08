'use strict';

module.exports = () => {

	var Config = require('./config.js')();

	var AWS = require('./aws.js')(Config);

	var Lambda = require('./lambda.js')();

	return { Config, AWS, Lambda };

};
