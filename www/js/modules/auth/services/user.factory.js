(function(){
    'use strict';

    angular
        .module('evaluon.auth')
        .factory('User', User);

    function User($http, api, headers, Auth){

        return{
            get: function(token){
                var user = token || Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.user,
                    headers:{
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(response){
                    return response.data.data;
                });

            },

            recover: function(mail){

                var user = Auth.clientLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'delete',
                    url: api.user,
                    headers: {
                        'Authorization': headers.authorization(tokenType, token),
                        'Content-type': headers.json
                    },
                    data:{
                        mail: mail
                    }
                }).then(function(response){
                    return response.data.data
                });
            }
        };
    };
})();
