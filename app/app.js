(function () {
  var app = angular.module("myMap", [
	/* Vendor components */
	'ui.bootstrap',
	/* Core components */
//	'ngStorage',
	'ngCookies',
	'ngRoute',
	'ngSanitize',
	'map.core'
	]);
	app.config(function($routeProvider) {
			$routeProvider
			// .when("main", {
				// templateUrl: "main.htm",
				// controller: "mapController"
			// )}
			// .otherwise({redirectTo:"/main"});
	});

	
}())