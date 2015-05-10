(function(){
    'use strict';

    var apiRouter = {

            url: {
                protocol: 'http',
                host: 'psadvance-desktop-api.herokuapp.com'
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

    };

    angular
        .module('evaluon')
        .constant('api', api)
})();
