'use strict';

(function () {
    angular.module('app.login')
        .controller('LoginController', LoginController);

    function LoginController() {
        var vm = this;

        vm.submit = submit;
        vm.user = {};

        // Implementations

        function submit(frm) {
            console.log(frm.$valid);
        }

    }
})();