(function(){

    angular
        .module('evaluon')
        .value('imgUrlBase', 'http://186.154.240.187:1045')
        .filter('image', image);

    function image(imgUrlBase) {
        return function(img){
            return '{0}/{1}'.format(imgUrlBase, img);
        };
    }
})();
