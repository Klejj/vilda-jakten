angular.module("Start")
    .controller("StartCtrl", ['$scope', '$location', function($scope, $location) {
        $scope.go = function(p) {
            DataFactory.setKey(p);
            $location.path("/journey");
        }
}]);