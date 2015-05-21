(function(){
    'use strict';

    angular
        .module('evaluon.user', ['ui.router', 'ngUnderscore'])
        .config(config);

    function config($stateProvider){

        $stateProvider

            .state('home', {
                url: '',
                templateUrl: 'views/user/home.html',
                controller: 'HomeController',
            });

        //Evaluation states
        $stateProvider

            .state('evaluation', {
               url: '/evaluation',
               templateUrl: 'views/user/evaluation/institutions.html',
               controller: 'InstitutionsController'
            })
            .state('evaluation-groups', {
                url: '/evaluation/institution/:id/groups',
                templateUrl: 'views/user/evaluation/groups.html',
                controller: 'GroupsController'
            })
            .state('evaluation-tests', {
                url: '/evaluation/group/:id/tests',
                templateUrl: 'views/user/evaluation/tests.html',
                controller: 'TestsController'
            })
            .state('evaluation-password', {
                url: '/evaluation/test/:id/password',
                templateUrl: 'views/user/evaluation/password.html',
                controller: 'PasswordController'
            })
            .state('evaluation-knowledgeAreas', {
                url: '/evaluation/test/:id/knowledge-areas',
                templateUrl: 'views/user/evaluation/knowledge-areas.html',
                controller: 'Evaluation.KnowledgeAreas',
                cache: false
            })
            .state('evaluation-test', {
                url: '/evaluation/test/:id/knowledge-area/:area',
                templateUrl: 'views/user/evaluation/test.html',
                controller: 'TestController'
            });


        //Self Test states

        $stateProvider

            .state('self',{
                url: '/self/tests',
                templateUrl: 'views/user/evaluation/tests.html',
                controller: 'TestsController'
            })
            .state('self-knowledgeAreas', {
                url: '/self/test/:id/knowledge-areas',
                templateUrl: 'views/user/evaluation/knowledge-areas.html',
                controller: 'KnowledgeAreas',
                cache: false
            })
            .state('self-test', {
                url: '/self/test/:id/knowledge-area/:area',
                templateUrl: 'views/user/evaluation/test.html',
                controller: 'TestController'
            });
        //Results states

        $stateProvider

            .state('results-institution', {
               url: '/results/institutions',
               templateUrl: 'views/user/results/institutions.html',
               controller: 'Results.InstitutionsController'
            })
            .state('results', {
                url: '/institution/:id/results',
                templateUrl: 'views/user/results/results.html',
                controller: 'ResultsController'
            });

        //Indicators states

        $stateProvider

            .state('indicators', {
                url: '/indicators',
                templateUrl: 'views/user/indicators/indicators.html',
                controller: 'IndicatorsController'
            });

        // Config states

        $stateProvider

            .state('config', {
                url: '/configurations',
                templateUrl: 'views/config/config.html'
            });
    };

})();
