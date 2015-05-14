(function(){
    'use strict';

    angular
        .module('evaluon', ['ionic','evaluon.auth', 'evaluon.user'])
        .run(run)
        .config(config)

    function config($stateProvider, $urlRouterProvider, $httpProvider){

        $urlRouterProvider.otherwise('/login');

        //Interceptor
        $httpProvider.interceptors.push('interceptor');
    }

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
