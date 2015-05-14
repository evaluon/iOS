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
        user: apiRouter.route('user'),

        // Institution module
        institution: apiRouter.route('institution'),

        // Group module
        group: apiRouter.route('evaluee/group'),

        // Test module
        test: apiRouter.route('test'),
        active: '/active',
        open: '/open',
        close: '/close',
        groupUR: '/group',
        knowledgeArea: '/knowledgearea',
        question: '/question'

    };

    angular
        .module('evaluon')
        .constant('api', api)
})();
