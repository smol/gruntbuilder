(function(){
	'use strict';

	const fs = require('fs');

	angular.module('GruntBuilder').service('Parser', ['Package', 'Config', 'Grunt', function(Package, Config, Grunt){

		var parse = function(directory, $scope){
			var self = this;


			this.pack = new Package(directory);
			this.config = new Config(this.pack);
			this.grunt = new Grunt(this.pack, directory);



			this.pack.load().then(function(json){
				$scope.config = json;

				return self.config.load($scope.config.modules);
			});

			this.grunt.load().then(function(temp){
				console.warn(temp);
			});
		};

		parse.prototype.select = function(component) {

		};

		return parse;
	}]);
})();
