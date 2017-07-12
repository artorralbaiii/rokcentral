'use strict';

(function () {
    angular.module('app.sign-up')
        .config(getRoutes);

    getRoutes.$inject = ['$routeProvider'];

    function getRoutes($routeProvider) {
        $routeProvider
            .when('/sign-up', {
                templateUrl: 'app/sign-up/sign-up.html',
                controller: 'SignUpController',
                controllerAs: 'vm'
            });
    }
})();