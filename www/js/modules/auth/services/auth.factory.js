(function(){
    'use strict';

    angular
        .module('evaluon.auth')
        .factory('Auth', Auth);

    function Auth($http, headers, localStorageService, tokens, api, access){

        return{

            client: function(){
                
                return $http({
                    method: 'post',
                    url: api.token,
                    headers: {
                        'Content-Type': headers.urlencoded
                    },
                    data: $.param(access.client)
                }).then(function(response){
                    return response.data;
                });
            },

            password: function(username, password){
                var client = this.clientLogged(),
                            tokenType = client.token_type,
                            token = client.access_token;

                return $http({
                    method: 'post',
                    url: api.token,
                    headers: {
                        'Content-Type': headers.urlencoded,
                        Authorization: headers.authorization(tokenType, token)
                    },
                    data: $.param(access.password(username, password)),
                }).then(function(response){
                    return response.data;
                });
            },

            loginClient: function(client){
                localStorageService.set(
                    CryptoJS.SHA1(tokens.client).toString(), client
                );
            },

            login: function(user){
                localStorageService.set(
                    CryptoJS.SHA1(tokens.user).toString(), user
                );
            },

            logout: function(){
                localStorageService.remove(
                    CryptoJS.SHA1(tokens.user).toString()
                );
            },

            userLogged: function(){
                return localStorageService.get(
                    CryptoJS.SHA1(tokens.user)
                );
            },

            clientLogged: function(){
                return localStorageService.get(
                    CryptoJS.SHA1(tokens.client)
                );
            }

        };
    };
})();
