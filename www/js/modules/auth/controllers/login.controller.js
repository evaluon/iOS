(function(){
    'use strict';

    angular
        .module('evaluon.auth')
        .controller('LoginController', LoginController);

    function LoginController($scope, Auth){

        $scope.login = function(user){
            Auth.password(user.email, user.password).then(function(data){
                console.log(data);
            });
        };
    };

})();
