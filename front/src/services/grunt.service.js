(function(){
	'use strict';

	const fs = require('fs');

	angular.module('GruntBuilder').service('Grunt', ['$q', function($q){

		var grunt = function grunt(pack, directory){
			this.package = pack;
			this.directory = directory;
		};

		grunt.prototype.load = function() {
			var deferred = $q.defer();

			fs.readFile(this.directory + '/gruntfile.js', 'utf-8', function(err, data){
				if (err)
					return deferred.reject(err);



				return deferred.resolve();
			});

			return deferred.promise;
		};

		return grunt;

	}]);
})();
