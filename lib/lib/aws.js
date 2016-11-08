'use strict';

module.exports = (Config) => {
	
	var AWS = require('aws-sdk');

	var Config = Config || {};

	if (process.env.IS_OFFLINE) {
		AWS.config.update({
			region: Config.awsRegion || '',
			accessKeyId: Config.aws_access_key_id || '',
			secretAccessKey: Config.aws_secret_access_key || ''
		});
	}

	return AWS;
};