//Creamos el modulo "appControllers" para agregar los controllers.
var controllers = angular.module('appControllers', []);

//Controller que maneja la vista donde están todos los perfiles
controllers.controller('PerfilCtrl', function PerfilCtrl($scope, $http, Config, PerfilService) {
    $scope.perfil = {};

    $scope.obtenerPerfiles = function() {
        PerfilService.obtenerPerfiles()
            .success(function(data) {
                $scope.listaPerfiles = data;
                console.log(data);
            })
            .error(function(data) {
                console.log(data);
            });
    };

    $scope.obtenerPerfiles();

    $scope.guardarPerfil = function() {
        if ($scope.perfil.id && $scope.perfil.id > 0) {
            $scope.modificarPerfil();
        } else {
            $scope.crearPerfil();
        }

    };

    $scope.AsignarValores = function(x) {
        console.log(x);
        $scope.perfil.id = x.id;
        $scope.perfil.codigo = x.codigo;
        $scope.perfil.descripcion = x.descripcion;

    };

    $scope.crearPerfil = function() {
        console.log($scope.perfil);
        PerfilService.crearPerfil($scope.perfil)
            .success(function(data) {
                $scope.perfil = {};
                $scope.obtenerPerfiles();
                //IMPRIMO LOS DATOS ENVIADOS DESDE EL BACKEND
                console.log(data);
            })
            .error(function(data) {
                console.log(data);
            });
    };

    $scope.modificarPerfil = function() {
        PerfilService.modificarPerfil($scope.perfil)
            .success(function(data) {
                $scope.perfil = {};
                $scope.obtenerPerfiles();
                console.log(data);
            })
            .error(function(data) {
                console.log('OCURRIO UN ERROR');
                console.log(data);
            });
    };

    $scope.eliminarPerfil = function(id) {
        console.log("ELIMINAR");
        console.log(id);
        PerfilService.eliminarPerfil(id)
            .success(function(data) {
                $scope.obtenerPerfiles();
                console.log(data);
            })
            .error(function(data) {
                console.log('OCURRIO UN ERROR');
                console.log(data);
            });
    };
});