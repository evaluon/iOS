(function(){
    'use strict';

    angular
        .module('evaluon', ['ionic','evaluon.auth', 'evaluon.user'])
        .run(run)
        .config(config)

    function config($stateProvider, $urlRouterProvider, $httpProvider){

        $urlRouterProvider.otherwise('/404');

        //Interceptor
        $httpProvider.interceptors.push('interceptor');

        //Error pages

        $stateProvider

            .state('404',{
                url: '/404',
                templateUrl: 'views/errors/404.html',
                data: {
                    role: 2
                }
            })
            .state('403', {
                url: '/403',
                templateUrl: 'views/errors/403.html',
                data:{
                    role: 2
                }
            });
    };

    function run($ionicPlatform){
        $ionicPlatform.ready(function() {

          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
          }
          if (window.StatusBar) {
            StatusBar.styleLightContent();
          }
        });
    }

})();
