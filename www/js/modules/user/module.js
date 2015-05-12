(function(){
    'use strict';

    angular
        .module('evaluon.user', ['ui.router', 'ngUnderscore'])
        .config(config);

    function config($stateProvider){

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'views/user/home.html',
                controller: 'HomeController',
            });
            
            //Evaluation states
        $stateProvider
        
            .state('evaluation', {
               url: '/evaluation',
               templateUrl: 'views/user/evaluation/institutions.html',
               controller: 'Evaluation.InstitutionController'
            });
    };

})();
