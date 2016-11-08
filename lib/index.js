'use strict';

/*
Our library system runs on the DI design pattern. To that,
we're getting our AWS and Helpers, then direct injecting
those key objects into any resources or modeling that'd
potentially need those two objects.

This helps keep our code extremely modular, and flow 
logically, for easier readability and maintenance down the
line.
*/

var Lib = require('./lib')();

module.exports.items = require('./items')(Lib);
