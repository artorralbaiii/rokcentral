'use strict';

(function () {
    angular.module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
        console.log('Hi from HomeController!');

    }

})();