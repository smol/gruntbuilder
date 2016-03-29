(function(){
	'use strict';

	const dialog = require('remote').require('dialog');

	angular.module('GruntBuilder').controller('RootController', ['$scope', 'Parser', function($scope, Parser){
		$scope.folder_path = null;
		// $scope.gruntfile_json = {};

		$scope.open_folder = function(){
			// dialog.showOpenDialog({ properties: ['openDirectory']}, function(directory){
				var directory = '//Users/smol/projects/landscape/';
				$scope.folder_path = directory;


				var parser = new Parser(directory, $scope);

				

			// });
		};



	}]);
})();
