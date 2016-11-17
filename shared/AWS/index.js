'use strict';

/*
Whenever developing AWS SLS offline, you'll need to specify 
the region, accessKeyId, and secretAccessKey -- at least 
whenever you're accesing other AWS resources that offline
can't spoof. 

This way, SLS can still access your AWS resources live while
you're testing your operative code locally on your machine.

This class gracefully handles that, and pulls your AWS key
values from your local profile appropriately (you know, 
from ~/.aws/credentials).
*/

module.exports = (Config) => {

	var AWS = require('aws-sdk');

	//this really applies to local development, so we exit out if not offline
	if (!process.env.IS_OFFLINE) { return AWS; }

	var _ = require('underscore');

	var fs = require('fs');

	var path = require('path');

	var exec = require('child_process').execSync;

	var localCredFilepath = '~/.aws/credentials';

	var profiles = {};

	var contents = exec(`cat ${localCredFilepath}`, { encoding: 'utf8' });

	_.each(contents.split(/\n\n/), function(group) {
		var lines = group.split(/\n/);
		var profileLine = lines.shift();
		var profileKey = profileLine.replace(/[\[\]]+/g, '');
		profiles[profileKey] = {};

		_.each(lines, function(line) {
			var parts = line.split(/\s?\=\s?/);
			var key = parts[0];
			var value = parts[1];
			profiles[profileKey][key] = value;
		});

	});

	AWS.config.update({
		region: Config.awsRegion,
		accessKeyId: profiles[Config.awsProfile].aws_access_key_id,
		secretAccessKey: profiles[Config.awsProfile].aws_secret_access_key
	});

	return AWS;

};
