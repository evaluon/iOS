'use strict';

(function(){

    angular
        .module('evaluon', ['ionic','evaluon.auth'])
        .run(run)
        .config(config)

    function config($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/login');
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
