(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .factory('Indicator', Indicator);

    function Indicator($http, Auth, headers, api){

        return {
            get: function(institution){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    methor: 'get',
                    url: api.indicator,
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
