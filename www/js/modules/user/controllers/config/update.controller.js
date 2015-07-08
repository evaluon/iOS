(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('UpdateController', UpdateController);

    function UpdateController($scope, evalueeInfo, User, msg, $state, $filter){

        var vm = $scope;

        vm.user = {};
        vm.evaluee = {};
        vm.update = update;
        vm.disabilities = evalueeInfo.disabilities;
        vm.genders = evalueeInfo.genders;
        vm.levels = evalueeInfo.levels;
        vm.types = evalueeInfo.types;

        getUser();

        function getUser(){
            User.get().then(function(data){
                data.id = Number(data.id);
                data.birth_date = new Date(data.birth_date);
                data.birth_date = $filter('date')(data.birth_date, 'yyyyMMdd');
                data.birth_date = Number(data.birth_date);
                vm.user = data;
                vm.evaluee = data.evaluee;
                delete vm.user.evaluee;

            });
        }

        function update(user, evaluee, form){
            user = angular.copy(user);

            if(form.$valid){

                var password = angular.copy(user.password);
                delete user.password2;
                user.password = CryptoJS.SHA1(user.password).toString();

                User.update(user).then(function(){
                    User.updateEvaluee(evaluee).then(function(){
                        msg.show('Exito', 'Usuario actualizado correctamente');
                        $state.go('home');
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

                errorMessage = errorMessage.substring(0, errorMessage.length-1);

                msg.show(errorTitle, errorMessage);
            }
        }

    }
})();
