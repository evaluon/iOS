(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .factory('Question', Question);

    function Question($http, Auth, api, headers){

        return {
            get: function(test, area){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'get',
                    url: '{0}{1}/{2}'.format(
                        api.id(api.test, test), api.question, area
                    ),
                    headers:{
                        'Authorization': headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    }
                }).then(function(response){
                    return response.data.data;
                });
            }
        };
    };
})();
