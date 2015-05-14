(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('Evaluation.TestsController', TestsController);

    function TestsController($scope, $state, Test, list, $ionicHistory){

        var group = $state.params.id
        ,   name = $state.current.name;

        $scope.tests = [];

        $scope.routes = {
            password: name=='self' ? 'self-knowledgeAreas':'evaluation-password'
        };

        getTests();

        function getTests(){

            if(name == "self"){
                Test.getSelfList().then(function(data){
                    $scope.tests = data;
                }).catch(function(){
                    $ionicHistory.goBack();
                })
            }
            else{
                Test.getList(group).then(function(data){
                    $scope.tests = data;
                }).catch(function(){
                    $ionicHistory.goBack();
                });
            }
        };

    };
})();
