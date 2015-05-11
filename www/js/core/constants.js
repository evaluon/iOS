(function(){
    'use strict';

    angular
    .module('evaluon')
    .constant(
        'headers', {
            urlencoded: 'application/x-www-form-urlencoded',
            json: 'application/json',
            authorization: function(t, k) { return '{0} {1}'.format(t, k) }
        }
    )
    .constant(
        'tokens', {
            client: 'alv9183kvl',
            user: '6lv91k2vc5'
        }
    )
    .constant(
        'access', {
            client: {
                grant_type: 'client_credentials',
                client_id: 'administrator',
                client_secret: 'kv0Ls8xoIFPdE2GXMK5fodQsAEBV5GzzINZOA0NX99E='
            },
            password: function(user, password){

                return {
                    grant_type: 'password',
                    client_id: this.client.id,
                    client_secret: this.client.secret,
                    username: user,
                    password: password
                }
            },
            refresh: function(refresh_token){

                return  {
                    grant_type: 'refresh_token',
                    refresh_token: refresh_token
                }

            }
        }
    );

})()
