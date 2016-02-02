angular.module('vilda-jakten'. [
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'template/start.html',
        controller: 'StartCtrl'
    });
}])