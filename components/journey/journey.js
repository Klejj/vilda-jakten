angular.module("journey")
    .controller("JourneyCtrl", ['$scope', '$location', function($scope, $location) {
        var text = "Test";

        $http.get('/journey/data').success(function(data, status, headers, config) {
            if(data && status === 200) {
                $scope.data = data;
                var text = sjcl.decrypt($scope.key, data);
            }
        });
}]);