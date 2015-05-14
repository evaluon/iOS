(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .controller('TestController', TestController);

    function TestController(
        $scope, $state, msg, $ionicHistory, Question, Answer, _
        ){

        $scope.test = $state.params.id;
        $scope.area = $state.params.area;
        $scope.questions = [];
        $scope.exit = exit;
        $scope.rollbackAnswersFlag = false;
        $scope.open = false;
        $scope.close = false;

        getQuestions();

        $scope.verifyAnswers = function(){
            $scope.rollbackAnswersFlag = true;

            _.each($scope.questions, function(question, index){
                if(question.answer){
                    question.invisible = true;
                }
            });
        };

        $scope.rollbackAnswers = function(){
            $scope.rollbackAnswersFlag = false;

            _.each($scope.questions, function(question, index){
                question.invisible = false;
            });
        };

        $scope.send = function(){
            Answer.send($scope.test, $scope.questions).then(function(){
                msg.show('Exito','Area enviada');
                $ionicHistory.goBack();
            });
        };

        function getQuestions(){
            Question.get($scope.test, $scope.area).then(function(data){
                $scope.questions = data;

                for(var p in $scope.questions){
                    if($scope.questions[p].open == 0){
                        $scope.close = true;
                        $scope.questions[p].answers = _.shuffle(
                            $scope.questions[p].answers
                        );
                    }
                    if($scope.questions[p].open == 1){
                        $scope.open = true;
                    }
                }
            });
        };

        function exit(){
            msg.confirm(
                'Alerta', 'El área será tomada como no enviada', function(){
                    $ionicHistory.goBack();
                }
            );
        }
    };
})();
