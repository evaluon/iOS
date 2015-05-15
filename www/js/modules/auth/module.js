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
                data:{
                    role: 4
                }
            })
            .state('logout', {
                url: '/logout',
                cache: false,
                controller: 'LogoutController',
            })
            .state('singup', {
                url: '/singup',
                templateUrl: 'views/auth/singup.html',
                controller: 'SingupController',
                data:{
                    role: 4
                }
            })
            .state('recover', {
                url: '/recover',
                templateUrl: 'views/auth/recover.html',
                controller: 'RecoverController',
                data:{
                    role: 4
                }
            });
    };

    function run($rootScope, Auth, localStorageService, $state){

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams){

            if(!localStorageService.isSupported) {

            }

            if(!Auth.clientLogged()){
                Auth.client().then(function(data){
                    Auth.loginClient(data);
                });
            }

            if(!toState.data) toState.data = {role: 8};

            if(!(toState.data.role == 2)){

                if(!(toState.data.role == 4) && !Auth.userLogged()){
                    event.preventDefault();
                    if(toState.name = "home") $state.go('login');
                    else $state.go('403');
                }

                if((toState.data.role == 4) && Auth.userLogged()){
                    event.preventDefault();
                    $state.go('home');
                }

            }
        });
    }
})();
