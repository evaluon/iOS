(function(){
    'use strict';

    angular
        .module('evaluon')
        .factory('interceptor', interceptor)

    function interceptor($q, $injector, errors){

        return {
            request: function(config){

                $injector.get('$ionicLoading').show({
                    template: '<ion-spinner></ion-spinner><br>Cargando'
                });

                return config;
            },

            response: function(response){

                $injector.get('$ionicLoading').hide();

                return response;
            },

            responseError: function(response) {

                $injector.get('$ionicLoading').hide();

                var message;

                if(errors[response.status]){
                    if(errors[response.status][response.data.error.message]){
                        message = errors[response.status][response.data.error.message];
                    }
                    else if(errors[response.status][response.data.error]){
                        message = errors[response.status][response.data.error];
                    }
                    else{
                        message = 'Error desconocido, si este persiste contacte al administrador';
                    }
                }
                else if(response.status == 500){

                    if(response.data.error_description == 'user_not_found'){
                        message = 'Usuario y contraseña no coinciden';
                    }
                    else if(response.data.error_description == 'blocked_user'){
                        message = 'Usuario bloqueado';
                    }
                    else{
                        message = "Ha ocurrido un error en el servidor";
                    }
                }
                else if(response.status == 0){
                    message = "No hay conección a internet";
                }

                else{
                    message = 'Error desconocido, si este persiste contacte al administrador';
                }

                response.message = message;

                $injector.get('$ionicLoading').hide();

                if(response.config.data){
                    if(!response.config.data.nonErrorMessage) $injector.get('msg').show('Error', message);
                }
                else $injector.get('msg').show('Error', message);

                $injector.get('$ionicLoading').hide();


                return $q.reject(response);
            }
        };
    };

})();
