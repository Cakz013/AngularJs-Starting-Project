var crudApp = angular.module('crudApp', [
    'appControllers'
]);

crudApp.constant('Config', { "backendURL": "http://localhost:8090/rest.api" });