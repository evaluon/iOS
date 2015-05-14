(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .factory('Group', Group);

    function Group($http, Auth, api, headers){

        return{

            getList: function(institution){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token  = user.access_token;

                return $http({
                    method: 'get',
                    url: api.group,
                    headers:{
                        'Authorization': headers.authorization(tokenType, token)
                    },
                    params: {
                        institution: institution
                    }
                }).then(function(response){
                    return response.data.data;
                });
            }
        };
    };
})();
