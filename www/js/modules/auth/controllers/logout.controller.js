(function(){
    'use strict';

    angular
        .module('evaluon.auth')
        .controller('LogoutController', LogoutController);

    function LogoutController(Auth, $state){

        Auth.logout();
        $state.go('login');
    };
})();
