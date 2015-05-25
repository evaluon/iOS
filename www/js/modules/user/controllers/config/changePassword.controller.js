(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('ChangePasswordController', ChangePasswordController);

    function ChangePasswordController($scope, User, msg, $state){

        $scope.changePassword = function(password){

            User.changePassword(password).then(function(){
                msg.show('Exito', 'Contraseña cambiada satisfactoriamente');
                $state.go('home');
            });
        };
    }
})()
