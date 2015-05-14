(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('PasswordController', PasswordController);

    function PasswordController($scope, $state, Test){

        var test = $state.params.id;

        $scope.password = password;

        function password(hotp){
            Test.login(test, hotp).then(function(data){
                $state.go('evaluation-knowledgeAreas', {id: test});
            });
        };

    };
})();
