'use strict'
crudApp
    .factory('PerfilService', ['$http', 'Config', function($http, Config) {
        return {

            obtenerPerfiles: function() {
                return $http.get(Config.backendURL + '/perfil/');
            },
            crearPerfil: function(perfil) {
                return $http.post(Config.backendURL + '/perfil/', perfil);
            },
            modificarPerfil: function(perfil) {

                return $http.put(Config.backendURL + '/perfil/' + perfil.id, perfil);
            },
            eliminarPerfil: function(id) {
                return $http.delete(Config.backendURL + '/perfil/' + id);
            }
        }
    }])