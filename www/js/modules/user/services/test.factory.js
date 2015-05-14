(function(){
    'use strict';

    angular
        .module('evaluon.user')
        .factory('Test', Test);

    function Test($http, Auth, api, headers){

        return{

            getList: function(group){

                var user = Auth.userLogged()
                ,   tokenType = user.token_type
                ,   token = user.access_token;

                return $http({
                    method: 'get',
                    url: '{0}{1}/{2}{3}'.format(
                        api.test, api.groupUR, group, api.active
                        ),
                    headers:{
                        'Authorization': headers.authorization(tokenType, token)
                    },
                }).then(function(response){
                    return response.data.data;
                });
            }
        }
    };
})();
