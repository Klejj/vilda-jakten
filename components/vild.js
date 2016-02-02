angular.module('start', []);

angular.module('vilda-jakten', [
    'start',
    'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'template/start.html',
        controller: 'StartCtrl'
    });
}])