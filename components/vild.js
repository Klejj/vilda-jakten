angular.module('Data', []);
angular.module('Start', []);
angular.module('Journey', []);

angular.module('vilda-jakten', [
    'Data',
    'Start',
    'Journey',
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
}]);