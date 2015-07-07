(function(){

    angular
        .module('evaluon')
        .value('imageUrlBase', '186.154.240.187:1045')
        .filter('image', image);

    function image(imageUrlBase) {
        return function(img){
            return '{0}/{1}'.format(imageUrlBase, img);
        };
    }
})();
