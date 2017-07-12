'use strict';

(function(){
    angular.module('app.core')
        .directive('appNav', appNav);

    function appNav() {
        return {
            restrict: 'AE',
            templateUrl: 'app/core/nav.html'
        };
    }
})();