(function(){
    'use strict';

    var evalueeInfo = {
        disabilities: [
            {"id":0,"description":"Sin discapacidad"},
            {"id":1,"description":"Persona ciega"},
            {"id":2,"description":"Persona con baja visión"},
            {"id":3,"description":"Persona sordociega"}],
        types: [
            {"id":1,"description":"Estudiante"},
            {"id":2,"description":"Empleado"},
            {"id":3,"description":"Aspirante universitario"},
            {"id":4,"description":"Aspirante empleado"},
            {"id":5,"description":"Otro"}],
        levels: [
            {"id":1,"description":"Educación Básica Primaria"},
            {"id":2,"description":"Educación Básica Secundaria"},
            {"id":3,"description":"Empleo con el Estado"},
            {"id":4,"description":"Universidad"},
            {"id":5,"description":"Otro"}],
        genders: [
            {"id": 1, "description": "Hombre"},
            {"id": 2, "description": "Mujer"}
            ]
    };

    angular
    .module('evaluon.auth')
    .constant('evalueeInfo', evalueeInfo);


})();
