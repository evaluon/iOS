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
               controller: 'InstitutionsController',
               cache: false
            })
            .state('evaluation-groups', {
                url: '/evaluation/institution/:id/groups',
                templateUrl: 'views/user/evaluation/groups.html',
                controller: 'GroupsController',
                cache: false
            })
            .state('evaluation-tests', {
                url: '/evaluation/group/:id/tests',
                templateUrl: 'views/user/evaluation/tests.html',
                controller: 'TestsController',
                cache: false
            })
            .state('evaluation-password', {
                url: '/evaluation/test/:id/password',
                templateUrl: 'views/user/evaluation/password.html',
                controller: 'PasswordController',
                cache: false
            })
            .state('evaluation-knowledgeAreas', {
                url: '/evaluation/test/:id/knowledge-areas',
                templateUrl: 'views/user/evaluation/knowledge-areas.html',
                controller: 'KnowledgeAreasController',
                cache: false
            })
            .state('evaluation-test', {
                url: '/evaluation/test/:id/knowledge-area/:area',
                templateUrl: 'views/user/evaluation/test.html',
                controller: 'TestController',
            });


        //Self Test states

        $stateProvider

            .state('self',{
                url: '/self/tests',
                templateUrl: 'views/user/evaluation/tests.html',
                controller: 'TestsController',
                cache: false
            })
            .state('self-knowledgeAreas', {
                url: '/self/test/:id/knowledge-areas',
                templateUrl: 'views/user/evaluation/knowledge-areas.html',
                controller: 'KnowledgeAreasController',
                cache: false
            })
            .state('self-test', {
                url: '/self/test/:id/knowledge-area/:area',
                templateUrl: 'views/user/evaluation/test.html',
                controller: 'TestController',
            });
        //Results states

        $stateProvider

            .state('results-institution', {
               url: '/results/institutions',
               templateUrl: 'views/user/results/institutions.html',
               controller: 'Results.InstitutionsController',
               cache: false
            })
            .state('results', {
                url: '/institution/:id/results',
                templateUrl: 'views/user/results/results.html',
                controller: 'ResultsController',
                cache: false
            });

        //Indicators states

        $stateProvider

            .state('indicators', {
                url: '/indicators',
                templateUrl: 'views/user/indicators/indicators.html',
                controller: 'IndicatorsController',
                cache: false
            });

        // Config states

        $stateProvider

            .state('config', {
                url: '/config',
                templateUrl: 'views/user/config/config.html'
            })
            .state('config-help', {
                url: '/config/help',
                templateUrl: 'views/user/config/help.html'
            })
            .state('config-about', {
                url: '/config/about',
                templateUrl: 'views/user/config/about.html'
            })
            .state('config-update', {
                url: '/config/update',
                templateUrl: 'views/user/config/update.html',
                controller: 'UpdateController'
            })
            .state('config-changePassword', {
                url: '/config/change-password',
                templateUrl: 'views/user/config/changePassword.html',
                controller: 'ChangePasswordController'
            });
    }

})();
