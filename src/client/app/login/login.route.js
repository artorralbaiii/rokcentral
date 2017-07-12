'use strict';

(function () {
    angular.module('app.login')
        .config(getRoutes);

    getRoutes.$inject = ['$routeProvider'];

    function getRoutes($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });
    }
})();