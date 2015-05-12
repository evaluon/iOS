(function(){
    'use strict';

    angular
        .module('evaluon.auth')
        .controller('LoginController', LoginController);

    function LoginController($scope, Auth, $ionicPopup){

        $scope.login = function(user){
            Auth.password(user.email, user.password).then(function(data){
                $ionicPopup.alert({
                    title: 'Hola',
                    template: 'Este es un mensaje de saludo',
                });
            });
        };
    };

})();
