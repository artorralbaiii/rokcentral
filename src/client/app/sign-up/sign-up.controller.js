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

        function invalidPassword() {
            return (vm.user.password !== vm.user.confirmPassword);
        }

        function submit(frm) {

            if (invalidPassword()) {
                frm.confirmPassword.$setValidity("passwordNotMatch", false);
            } else {
                frm.confirmPassword.$setValidity("passwordNotMatch", true);
            }

            console.log(frm.$valid);
        }

    }

})();