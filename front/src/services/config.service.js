(function(){
	'use strict';

	const fs = require('fs');

	angular.module('GruntBuilder').service('Config', ['$q', function($q){
		function find_config_file(component){
			var deferred = $q.defer();

			fs.readFile('./build/configs/' + component + '.xml', 'utf-8', function(err, xml){
				if (!err)
					deferred.resolve(xml);
			});

			return deferred.promise;
		}

		var config = function config(pack){
			this.pack = pack;
		};

		config.prototype.load = function (components) {
			var promises = [];
			console.warn(components);

			for (var i = 0; i < components.length; ++i){
				promises.push(find_config_file(components[i].title));
			}

			return $q.all(promises);
		};

		return config;
	}]);
})();
