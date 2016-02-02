angular.module('vilda-jakten', [
    'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'template/start.html',
        controller: 'StartCtrl'
    });
}])