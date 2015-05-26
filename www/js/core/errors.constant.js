(function(){
    'use strict';

    var errors = {
        400: {
            missing_fields: 'Solicitud incompleta'
        },
        403: {
            invalid_permissions: 'No tienes permiso para acceder a estos recursos.',
            is_evaluee: "Imposible realizar acción. Es un estudiante.",
            not_an_evaluee: "Imposible realizar acción. No es un docente.",
            is_evaluator: "Imposible realizar acción. Es un docente.",
            not_an_evaluator: "Imposible realizar acción. No es un docente.",
            not_evaluees: "Alguno de los usuarios no es un estudiante.",
            test_unopened: "Este test aún no está abierto",
            unabled_institution: "Imposible realizar acción sobre esta institución.",
            insuficient_privileges: 'No tienes permiso para acceder a estos recursos',
            invalid_hotp_code: 'Clave de acceso inválida',
            invalid_grant: 'Usuario y contraseña no coinciden',
            access_denied: 'Usuario bloqueado',
            already_opened_test: 'El test que intenta abrir ya ha sido abierto',
            existing_user: 'El usuario ya existe'
        },
        404: {
            no_active_groups: 'No hay grupos activos',
            no_active_period: 'No hay algún un periodo activo para este grupo',
            no_active_test: 'No hay test activos para este grupo',
            test_unavailable: 'La prueba seleccionada no está disponible',
            client_not_found: "Cliente de aplicación no encontrado",
            results_not_found: "Los resultados del evaluado son muy pocos para hacer una estadística o no se encontraron. Posiblemente el evaluado es inválido",
            no_questions_available: "No hay preguntas disponibles",
            test_not_found: "No hay test disponibles"
        }
    };

    angular
        .module('evaluon')
        .constant('errors', errors);
})();
