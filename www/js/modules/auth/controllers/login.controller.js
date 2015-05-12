(function(){
    'use strict';

    angular
        .module('evaluon.auth')
        .controller('LoginController', LoginController);

    function LoginController($scope, Auth, User, $ionicPopup, $state){

        $scope.login = function(user){
            Auth.password(user.email, user.password).then(function(token){
                User.get(token).then(function(user){
                    if(user.role <= 1){
                        Auth.login(token);
                        $state.go('home');
                    }
                });
            });
        };
    };

})();
