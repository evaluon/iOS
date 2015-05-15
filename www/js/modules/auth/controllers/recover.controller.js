(function(){
    'use strict';

    angular
        .module('evaluon.auth')
        .controller('RecoverController', RecoverController);

    function RecoverController($scope, User, msg){

        $scope.recover = recover;

        function recover(mail){
            User.recover(mail).then(function(data){
                msg.show('Exito', 'Revise su correo electrónico');
            });
        };
    };
})();
