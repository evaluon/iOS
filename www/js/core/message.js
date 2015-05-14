(function(){
    'use strict';

    angular
    .module('evaluon')
    .service('msg', msg);

    function msg($ionicPopup){
        this.show = function(title, message){

            if(navigator && navigator.notification){
                navigator.notification.alert(message, function(){}, title, 'Aceptar');
            }
            else{
                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message,
                    okType: 'button-calm'
                });
            }
        };

        this.confirm = function(title, message, success){
            if(navigator && navigator.notification){

                var onConfirm = function(res){
                    if(res == 1){
                        success();
                    }
                };

                navigator.notification.confirm(
                    message,
                    onConfirm,
                    title,
                    ['Aceptar','Cancelar']
                );
            }

            else{
                var confirmPopup = $ionicPopup.confirm({
                    title: title,
                    template: message,
                    cancelText: 'Cancelar',
                    okText: 'Aceptar',
                    okType: 'button-calm'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        success();
                    } else {

                    }
                });
            }
        };
    }
})();
