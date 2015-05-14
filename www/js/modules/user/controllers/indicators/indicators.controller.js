(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('IndicatorsController', IndicatorsController);

    function IndicatorsController($scope, Indicator, User){

        $scope.indicators = [];
        $scope.user = {};

        data();

        function data(){
            Indicator.get().then(function(data){
                $scope.indicators = data;
            });
            User.get().then(function(data){
                $scope.user = data;
            });


        };

    };

})();
