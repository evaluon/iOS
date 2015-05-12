(function(){
    'use strict';

    var apiRouter = {

            url: {
                protocol: 'http',
                host: 'evaluon.gentebool.com:80'
            },
            route: function(path){
                var url = this.url;
                return '{0}://{1}/{2}'.format(url.protocol, url.host, path);
            },
            id: function(url, id){
                return '{0}/{1}'.format(url, id);
            }
    };

    var api = {
        // Root: Url id
        id: apiRouter.id,

        // Auth module
        token: apiRouter.route('auth/token'),

        // User module
        user: apiRouter.route('user')

    };

    angular
        .module('evaluon')
        .constant('api', api)
})();
