angular.module("Start")
    .controller("StartCtrl", ['$scope', '$location', 'Data', function($scope, $location, data) {
        $scope.go = function(p) {
            data.DataFactory.setKey(p);
            $location.path("/journey");
        }
}]);