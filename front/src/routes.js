(function(){
	'use strict';

	// app.config(['$stateProvider', function($stateProvider){
	// 	$stateProvider
	// 	.state('root', {
	// 		abstract : true,
	// 		templateUrl : 'root/index.html',
	// 		controller : 'RootController'
	// 	})
	// 	.state('root.home', {
	// 		url :'',
	// 		templateUrl : 'home/index.html',
	// 		controller : 'HomeController'
	// 	});
	// }]);

	angular.module('GruntBuilder').config(['$stateProvider', function($stateProvider){
		$stateProvider
		.state('root', {
			abstract : true,
			templateUrl : 'root/index.html',
			controller : 'RootController'
		})
		.state('root.home', {
			url :'',
			templateUrl : 'home/index.html',
			controller : 'HomeController'
		});

	}]);
})();
