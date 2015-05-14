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
               controller: 'Evaluation.InstitutionsController'
            })
            .state('evaluation-groups', {
                url: '/evaluation/institution/:id/groups',
                templateUrl: 'views/user/evaluation/groups.html',
                controller: 'Evaluation.GroupsController'
            })
            .state('evaluation-tests', {
                url: '/evaluation/group/:id/tests',
                templateUrl: 'views/user/evaluation/tests.html',
                controller: 'Evaluation.TestsController'
            })
            .state('evaluation-password', {
                url: '/evaluation/test/:id/password',
                templateUrl: 'views/user/evaluation/password.html',
                controller: 'Evaluation.PasswordController'
            })
            .state('evaluation-knowledgeAreas', {
                url: '/evaluation/test/:id/knowledge-areas',
                templateUrl: 'views/user/evaluation/knowledge-areas.html',
                controller: 'Evaluation.KnowledgeAreas'
            });
    };

})();
