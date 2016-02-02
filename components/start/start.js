angular.module("Start", ['Data'])
    .controller("StartCtrl", ['$scope', '$location', 'DataFactory', function($scope, $location, data) {
        $scope.go = function(p) {
            data.setKey(p);
            $location.path("/journey");
        }
}]);