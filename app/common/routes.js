(function () {
	var app = angular.module("map.core");
    app.$inject = ['$routeProvider'];

	app.config(function($routeProvider) {
			$routeProvider
			// .when("main", {
				// templateUrl: "main.htm",
				// controller: "mapController"
			// )}
			// .otherwise({redirectTo:"/main"});
	});

})();
