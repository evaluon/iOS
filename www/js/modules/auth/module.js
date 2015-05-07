'use strict';

(function(){
    angular
        .module('evaluon.auth', ['ui.router'])
        .config(config);

    function config($stateProvider){

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'views/auth/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('singup', {
                url: '/singup',
                templateUrl: 'views/auth/singup.html',
                controller: 'SingupController',
                controllerAs: 'vm'
            });
    };
})();
