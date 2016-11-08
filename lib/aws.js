'use strict';

module.exports = () => {
	var AWS = require('aws-sdk');
	var config = require('./config.js')();

	if (process.env.IS_OFFLINE) {
		AWS.config.update({
			region: config.awsRegion,
			accessKeyId: config.aws_access_key_id,
			secretAccessKey: config.aws_secret_access_key
		});
	}

	return AWS;
};