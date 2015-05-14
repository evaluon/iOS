(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .factory('Result', Result);

    function Result($http, Auth, api, headers){

        return {
            getList: function(institution){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.id(api.results, institution),
                    headers:{
                        'Authorization': headers.authorization(tokenType, token)
                    }
                }).then(function(response){
                    return response.data.data;
                });
            }
        };
    };
})();
