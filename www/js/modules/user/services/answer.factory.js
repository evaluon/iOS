(function(){
    'use strict';

    angular
    .module('evaluon.user')
    .factory('Answer' , Answer);

    function Answer($http, $q, Auth, api, headers){

        return{
            send: function(test, data){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                var qs = [];

                for(var i = 0; i < data.length; i++){
                    qs.push(
                        (function(d){

                            var sendData = {
                                test_id: test,
                                question_id: d.id
                            };

                            if(d.open){
                                sendData = _.extend(
                                    { answer_id: null, text: d.answer }, sendData
                                );
                            } else {
                                sendData = _.extend(
                                    { answer_id: d.answer }, sendData
                                    );
                            }

                            return $http({
                                method: 'post',
                                url: api.response,
                                headers: {
                                    Authorization:  headers.authorization(
                                        tokenType, token
                                    ),
                                    'Content-Type': headers.json
                                },
                                data: sendData
                            });
                        })(data[i])
                    );

                }

                return $q.all(qs).then(function(responses){
                    var qSent = _.reduce(responses, function(a, r){ return a + r }, 0);
                    if(qSent === qs.length){
                        //console.log("All questions sent");
                    } else {
                        //console.log("%d/%d questions sent", qSent, qs.length);
                    }
                });
            }
        };
    };
})();
