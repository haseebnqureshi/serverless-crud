'use strict';

module.exports = () => {
	if (!process.env.IS_OFFLINE) { return {}; }

	var yaml = require('js-yaml');
	var fs = require('fs');
	var path = require('path');
	var exec = require('child_process').execSync;
	var configFilepath = path.resolve(__dirname, '../../config.yml');
	
	var Config = yaml.safeLoad( fs.readFileSync(configFilepath, 'utf8') );

	//dynamically load aws variables from cli profile
	var credentials = exec('cat ~/.aws/credentials', { encoding: 'utf8' });
	var profiles = credentials.split(/\n\n/);

	//look for creds with our profile
	for (var p in profiles) {
		if (profiles[p].match(config.awsProfile)) {
			var profile = profiles[p];

			//find variables in our profile
			var lines = profile.split(/\n/);
			lines.shift();
			for (var l in lines) {
				var line = lines[l];
				var parts = line.split(/\s?\=\s?/);

				//loading our variables in config
				var key = parts[0];
				var value = parts[1];
				Config[key] = value;
			}
		}
	}

	return Config;
};
