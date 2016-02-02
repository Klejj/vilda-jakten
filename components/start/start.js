angular.module("start")
    .controller("StartCtrl", ['$scope', function($scope) {
        $scope.go = function(p) {
            $scope.key = p;
            $location..path("/journey");
        }
}]);