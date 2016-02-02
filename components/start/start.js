angular.module("start")
    .controller("StartCtrl", ['$scope', '$location', function($scope, $location) {
        $scope.go = function(p) {
            $scope.key = p;
            $location.path("/journey");
        }
}]);