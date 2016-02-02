angular.module('start', []);

angular.module('vilda-jakten', [
    'start',
    'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'components/start/start.html',
        controller: 'StartCtrl'
    });
}])