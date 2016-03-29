(function(){
	'use strict';

	const fs = require('fs');

	angular.module('GruntBuilder').service('Package', ['$q', 'Config', function($q, Config){
		var pack = {};

		function parse_dependencies(dependencies){
			pack.modules = [];

			for (var key in dependencies){
				if (key.indexOf('grunt-') >= 0){
					pack.modules.push({
						title : key,
						version : dependencies[key]
					});
				}
			}
		}

		var Package = function Package(directory){
			this.directory = directory;
		};

		Package.prototype.get = function(){
			return pack;
		};

		Package.prototype.load = function(){
			var deferred = $q.defer();

			fs.readFile(this.directory + '/package.json', 'utf-8', function(err, data){
				if (err)
					return deferred.reject(err);

				var temp = JSON.parse(data);
				parse_dependencies(temp.dependencies);

				return deferred.resolve(pack);
			});

			return deferred.promise;
		};

		return Package;
	}]);
})();
