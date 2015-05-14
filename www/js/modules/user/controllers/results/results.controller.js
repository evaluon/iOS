(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('ResultsController', ResultsController);

    function ResultsController($scope, $state, Result){

        var institution = $state.params.id;
        $scope.results = [];

        getResults();

        function getResults(){
            Result.getList(institution).then(function(data){
                $scope.results = data;
            });
        };
    };

})();
