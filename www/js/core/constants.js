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
                id: 'HhlMhODaflThcTRoDKWA/DvCbq/Qk9+OlRb+xjpmggo=',
                secret: 'db8eb0675856129cc28ad88c093d0f326e6dce6c'
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
