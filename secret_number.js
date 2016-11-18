'use strict';
	module.exports = function() {
		var randomNewNumber = Math.random() * 1000000;
		return function(){
			return randomNewNumber;
		};
};
	