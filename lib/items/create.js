'use strict';

/*
DATA MODELING LAYER

Purpose of this layer is to define any business logic
around the data. We do this to try and decouple our
data modeling from our DB choice.

Note: Assume all variables in `module.exports` are provided,
so no need to conditionally check their existence.
*/

module.exports = (Lib, Details, DB) => {
	
	/*
	The following creates the callback for our Serverless
	Framework lambda event handlers. We're only concerned
	with the event and a general callback.

	Note: Assume all variables in `EventHandler` are provided,
	so no need to conditionally check their existence.
	*/

	var EventHandler = (event, callback) => {

		// Start business logic ============

		var Item = JSON.parse(event.body);
		Item.updatedAt = new Date().getTime();

		// Stop businesss logic ============

		return require(`./${DB}/create.js`)(Item, callback, Lib, Details);

	};

	return EventHandler;

};