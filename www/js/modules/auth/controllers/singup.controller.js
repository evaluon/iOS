(function(){
    'use strict';

    angular
    .module('evaluon.auth')
    .controller('SingupController', SingupController);

    function SingupController($scope, User, $state, evalueeInfo, msg, Auth){
        var vm = $scope;

        vm.disabilities = evalueeInfo.disabilities;
        vm.genders = evalueeInfo.genders;
        vm.levels = evalueeInfo.levels;
        vm.types = evalueeInfo.types;

        $scope.singup = function(user, evaluee, form){

            user = angular.copy(user);

            if(form.$valid){

                var password = angular.copy(user.password);
                delete user.password2;
                user.password = CryptoJS.SHA1(user.password).toString();

                User.create(user).then(function(){
                    Auth.password(user.mail, password).then(function(auth){
                        Auth.login(auth);
                        User.createEvaluee(evaluee).then(function(data){
                            console.log(data);
                            msg.show('Exito', 'Usuario creado satisfactoriamente');
                            $state.go('home');

                        })
                    });
                });
            }
            else{
                var errorTitle = "Tienes errores en los siguientes campos:";

                var errorMessage = '';

                if(form.id.$invalid)
                errorMessage = errorMessage + "\ndocumento,";
                if(form.first_name.$invalid)
                errorMessage = errorMessage + "\nnombres,";
                if(form.last_name.$invalid)
                errorMessage = errorMessage + "\napellidos,";
                if(form.birth_date.$invalid)
                errorMessage = errorMessage + "\nfecha de nacimiento,";
                if(form.mail.$invalid)
                errorMessage = errorMessage + "\ncorreo,";
                if(form.gender.$invalid)
                errorMessage = errorMessage + "\ngénero,";
                if(form.disability.$invalid)
                errorMessage = errorMessage + "\ncondición visual,";
                if(form.type.$invalid)
                errorMessage = errorMessage + "\ntipo de usuario,";
                if(form.level.$invalid)
                errorMessage = errorMessage + "\nnivel de formación,";
                if(form.password.$invalid)
                errorMessage = errorMessage + "\ncontraseña,";
                else if(user.password != user.password2)
                errorMessage = errorMessage + "\nlas contraseñas no coinciden,";

                errorMessage = errorMessage.substring(0, errorMessage.length-1);

                msg.show(errorTitle, errorMessage);
            }
        };
    };

})();
