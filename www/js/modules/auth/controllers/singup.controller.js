'use strict';

(function(){

    angular
        .module('evaluon.auth')
        .controller('SingupController', SingupController);

    function SingupController($scope, evalueeInfo){
        var vm = $scope;

        vm.disabilities = evalueeInfo.disabilities;
        vm.genders = evalueeInfo.genders;
        vm.levels = evalueeInfo.levels;
        vm.types = evalueeInfo.types;
    };

})();
