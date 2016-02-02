angular.module('start', []);
angular.module('journey', []);

angular.module('vilda-jakten', [
    'start',
    'journey',
    'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'components/start/start.html',
        controller: 'StartCtrl'
    });
    $routeProvider.when('/journey', {
        templateUrl: 'components/journey/journey.html',
        controller: 'JourneyCtrl'
    });

    $routeProvider.otherwise({
    redirectTo: '/'})
}])