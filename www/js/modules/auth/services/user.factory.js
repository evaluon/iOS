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

            create: function(add){
                var user = token || Auth.clientLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.user,
                    headers:{
                        Authorization: headers.authorization(tokenType, token),
                        'Content-type': headers.json
                    },
                    data: add
                }).then(function(response){
                    return response.data.data;
                });
            },

            createEvaluee: function(evaluee){
                var user = token || Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.evaluee,
                    headers:{
                        Authorization: headers.authorization(tokenType, token),
                        'Content-type': headers.json
                    },
                    data: evaluee
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
            },

            changePassword: function(password){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method:'put',
                    url: api.user,
                    headers:{
                        'Authorization': headers.authorization(tokenType, token),
                        'Content-type': headers.json
                    },
                    data:{
                        password: CryptoJS.SHA1(password).toString()
                    }
                }).then(function(response){
                    return response.data.data;
                });
            }
        };
    };
})();
