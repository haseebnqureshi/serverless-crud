'use strict';

var fs = require('fs');

var yaml = require('js-yaml');

var path = require('path');

var filepath = path.resolve(__dirname, '..', 'config.yml');

var contents = fs.readFileSync(filepath, 'utf8');

module.exports = yaml.safeLoad(contents);
