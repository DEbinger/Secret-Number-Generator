'use strict';
var testRandomNumber = module.exports = function() {
	var randomNewNumber = Math.random() * 1000000;
		return function (){
	 		return randomNewNumber;
	};
};
	