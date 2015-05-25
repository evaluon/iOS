(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('UpdateController', UpdateController);

    function UpdateController($scope, evalueeInfo, User){

        var vm = $scope;

        vm.user = {};
        vm.evaluee = {};
        getUser();

        vm.disabilities = evalueeInfo.disabilities;
        vm.genders = evalueeInfo.genders;
        vm.levels = evalueeInfo.levels;
        vm.types = evalueeInfo.types;

        function getUser(){
            User.get().then(function(data){
                console.log(data);
                data.id = Number(data.id);
                data.birth_date = new Date(data.birth_date);
                data.birth_date = data.birth_date.getUTCFullYear() + '' + (data.birth_date.getUTCMonth()+1) + '' + data.birth_date.getUTCDate();
                data.birth_date = Number(data.birth_date);
                vm.user = data;
                vm.evaluee = data.evaluee;

            });
        };

    }
})()
