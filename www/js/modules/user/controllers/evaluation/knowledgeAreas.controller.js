(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('KnowledgeAreasController', KnowledgeAreas);

    function KnowledgeAreas($scope, $state, KnowledgeArea, list, msg){

        var test = $state.params.id
        ,   name = $state.current.name;

        $scope.routes = {
            test: name == 'self-knowledgeAreas' ? 'self-test':'evaluation-test',
            testId: test
        };

        $scope.knowledgeAreas = [];
        $scope.exit = exit;

        getKnowledgeAreas();

        function exit(){
            msg.confirm(
                'Alerta', 'El examen será tomada como no enviado', function(){
                    $state.go('home');
                }
            );
        };

        function getKnowledgeAreas(){
            KnowledgeArea.getList(test).then(function(data){
                if(data.length == 0){
                    msg.show('Mensaje', 'Evaluación enviada exitosamente');
                    $state.go('home');
                }
                else $scope.knowledgeAreas = list.doubled(data);
            });
        };
    }

})();
