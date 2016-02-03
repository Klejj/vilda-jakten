angular.module("Journey", ['Data'])
    .controller("JourneyCtrl", ['$scope', '$http', '$location', 'DataFactory', function($scope, $http, $location, datafactory) {
        var key = datafactory.data.key;
        var data = '{"iv":"BgTS/EYHdetoyhpFc3XHaA==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"74m+06K/U9w=","ct":"IpU7eALOODgvGC6KZmoCrTUo9ybk1B+YzMWYVWu1yKGqhLPs3eSIkX3Y+4d54FOPF//fDXNzOiW4dcePiRcl+GXCTqk="}';
        $scope.text = sjcl.decrypt(key, data);
        $scope.step = function(a) {
            if(_.isEqual(sjcl.hash.sha256.hash(a), [-1699537461, 805124918, 1466552492, 984230614, -10420184, 1416240283, -1765524557, 1525173454]) {
                datafactory.data.key = a;
                $location.path("/skymning");
            }
        };
}]);