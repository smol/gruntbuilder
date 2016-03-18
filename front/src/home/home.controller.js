(function(){
	'use strict';

	const dialog = require('remote').require('dialog');

	angular.module('GruntBuilder').controller('HomeController', ['$scope', 'Package', function($scope, Package){
		$scope.open_folder = function(){
			dialog.showOpenDialog({ properties: ['openDirectory']}, function(directory){
				$scope.folder_path = directory;

				var pack = new Package(directory);

				console.warn(pack);
				pack.load_file().then(function(json){
					console.warn(json);
				});


			});
		};
	}]);
})();
