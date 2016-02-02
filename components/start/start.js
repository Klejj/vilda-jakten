angular.module("Start")
    .controller("StartCtrl", ['$scope', '$location', 'Data', function($scope, $location, Data) {
        $scope.go = function(p) {
            DataFactory.setKey(p);
            $location.path("/journey");
        }
}]);