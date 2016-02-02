angular.module("journey")
    .controller("JourneyCtrl", ['$scope', '$http', function($scope, $http) {
        var text = "Test";

        $http.get('/journey/data').success(function(data, status, headers, config) {
            if(data && status === 200) {
                $scope.data = data;
                var text = sjcl.decrypt($scope.key, data);
            }
        });
}]);