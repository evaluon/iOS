(function(){
    'use strict';

    angular
        .module('evaluon.user', ['ui.router'])
        .config(config);

    function config($stateProvider){

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'views/user/home.html',
                controller: 'HomeController',
            });
    };

})();
