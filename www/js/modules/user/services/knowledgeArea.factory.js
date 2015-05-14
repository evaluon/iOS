(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .factory('KnowledgeArea', KnowledgeArea);

    function KnowledgeArea($http, Auth, headers, api){

        return {

            getList: function(test){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'get',
                    url: '{0}{1}'.format(
                        api.id(api.test, test), api.knowledgeArea
                        ),
                    headers: {
                        'Authorization': headers.authorization(tokenType, token)
                    }
                }).then(function(response){
                    return response.data.data;
                });
            }
        }
    };
})();
