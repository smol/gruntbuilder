(function(){
	'use strict';

	const fs = require('fs');

	angular.module('GruntBuilder').service('Parse', [function(){
		var parse = function parse(file){
			console.warn(file);
		};

		return parse;
	}]);
})();
