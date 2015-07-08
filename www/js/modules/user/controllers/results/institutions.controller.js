(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('Results.InstitutionsController', InstitutionsController);

    function InstitutionsController($scope, $state,msg, Institution, list){

        $scope.institutions = [];

        getInstitutions();

        function getInstitutions(){
            Institution.getResultList().then(function(data){
                if(data.length == 0){
                    msg.show('Alerta','No tienes resultados asignados');
                    $state.go('home');
                }
                else
                $scope.institutions = list.doubled(data);
            });
        };
    };
})();
