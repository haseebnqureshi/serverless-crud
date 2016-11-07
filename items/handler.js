'use strict';

module.exports.read = (event, context, callback) => {
	let user = {
		id: 123,
		name: 'New User',
		email: 'new@user.com'
	};
	const response = {
		statusCode: 200,
		headers: {},
		body: JSON.stringify(user)
	};
	context.succeed(response);
};

module.exports.update = (event, context, callback) => {
	let user = {
		id: 123,
		name: 'New User',
		email: 'new@user.com'
	};
	const response = {
		statusCode: 200,
		headers: {},
		body: JSON.stringify(user)
	};
	context.succeed(response);
};

module.exports.delete = (event, context, callback) => {
	const response = {
		statusCode: 204,
		headers: {}
	};
	context.succeed(response);
};
