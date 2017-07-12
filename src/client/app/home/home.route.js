'use strict';

(function () {
    angular.module('app.home')
        .config(getRoutes);

    getRoutes.$inject = ['$routeProvider'];

    function getRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

})();