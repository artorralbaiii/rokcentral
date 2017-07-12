'use strict';

(function () {
    angular.module('app.sign-up')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = [];

    function SignUpController() {
        var vm = this;

        vm.submit = submit;
        vm.user = {};

        // Implementations

        function submit() {
            console.log(vm.user);
        }

    }

})();