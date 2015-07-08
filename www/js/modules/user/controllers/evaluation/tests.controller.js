(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('TestsController', TestsController);

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
                    console.log(data);
                    if(data.length === 0){
                        Test.createSelf().then(function(){
                            getTests();
                        }).catch(function(){
                            $state.go('home');
                        });
                    }
                    else
                    $scope.tests = [data];
                }).catch(function(){
                    $ionicHistory.goBack();
                });
            }
            else{
                Test.getList(group).then(function(data){
                    $scope.tests = data;
                }).catch(function(){
                    $ionicHistory.goBack();
                });
            }
        }

    }
})();
