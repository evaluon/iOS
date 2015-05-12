(function(){
    'use strict';

    angular
        .module('evaluon.auth', ['ui.router', 'LocalStorageModule'])
        .config(config)
        .run(run);

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
            })
            .state('recover', {
                url: '/recover',
                templateUrl: 'views/auth/recover.html',
                controller: 'RecoverController'
            });
    };

    function run($rootScope, Auth, localStorageService){

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams){

            if(!localStorageService.isSupported) {

            }

            if(!Auth.clientLogged()){
                Auth.client().then(function(data){
                    Auth.loginClient(data);
                });
            }
        });
    }
})();
