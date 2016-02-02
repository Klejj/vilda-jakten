angular.module("Start", ['Data'])
    .controller("StartCtrl", ['$scope', '$location', 'DataFactory', function($scope, $location, datafactory) {
        $scope.go = function(p) {
            datafactory.data.key = p;
            $location.path("/journey");
        }
}]);