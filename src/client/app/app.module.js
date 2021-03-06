'use strict';

(function () {
    angular
        .module('app', [
            /* Shared Modules */
            'app.core',
            /* Feature Modules */
            'app.feature1',
            'app.home',
            'app.login',
            'app.sign-up'
        ])
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);
})();