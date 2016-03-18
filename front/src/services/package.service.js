(function(){
	'use strict';

	const fs = require('fs');

	angular.module('GruntBuilder').service('Package', ['$q', function($q){
		var json = function json(directory){
			this.directory = directory;
		};

		json.prototype.load_file = function () {
			var deferred = $q.defer();

			fs.readFile(this.directory + '/package.json', 'utf-8', function(err, data){
				if (err)
					return deferred.reject(err);

				return deferred.resolve(JSON.parse(data));
			});

			return deferred.promise;
		};

		return json;
	}]);
})();
