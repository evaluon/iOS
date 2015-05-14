(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('Evaluation.TestsController', TestsController);

    function TestsController($scope, $state, Test, list, $ionicHistory){

        var group = $state.params.id;

        $scope.tests = [];

        $scope.routes = {
            password: 'evaluation-password'
        };

        getTests();

        function getTests(){
            Test.getList(group).then(function(data){
                $scope.tests = data;
            }).catch(function(){
                $ionicHistory.goBack();
            });
        };
    };
})();
