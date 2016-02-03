angular.module('Data', []);
angular.module('Start', ['Data']);
angular.module('Journey', ['Data']);
angular.module('Skymning', ['Data']);

angular.module('vilda-jakten', [
    'Start',
    'Journey',
    'Skymning',
    'Data',
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
    $routeProvider.when('/skymning', {
        templateUrl: 'components/skymning/skymning.html',
        controller: 'SkymningCtrl'
    });

    $routeProvider.otherwise({
    redirectTo: '/'})
}]);