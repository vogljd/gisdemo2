(function () {
    "use strict";

    angular.module('app', [
        'app.core',
        'app.common',
        'app.main'
    ]).run(appRun);

    appRun.$inject = ['$rootScope', '$location', '$cookies', '$http']

    function appRun($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
//        $rootScope.globals = $cookies.get('globals') || {};

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
//            $rootScope.title = current.$$route.title;
        });
    }


}());