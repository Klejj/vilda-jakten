angular.module('Data', []);
angular.module('Start', ['Data']);
angular.module('Journey', ['Data']);
angular.module('Skymning', ['Data']);
angular.module('Goal', ['Data']);

angular.module('vilda-jakten', [
    'Start',
    'Journey',
    'Skymning',
    'Goal',
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
    });    $routeProvider.when('/goal', {
        templateUrl: 'components/goal/goal.html',
        controller: 'GoalCtrl'
    });

    $routeProvider.otherwise({
    redirectTo: '/'})
}]);