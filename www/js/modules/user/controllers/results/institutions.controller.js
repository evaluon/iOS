(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('Results.InstitutionsController', InstitutionsController);

    function InstitutionsController($scope, $state, Institution, list){

        $scope.institutions = [];

        getInstitutions();

        function getInstitutions(){
            Institution.getList().then(function(data){
                $scope.institutions = list.doubled(data);
            });
        };
    };
})();
