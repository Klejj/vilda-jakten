angular.module("Skymning", ['Data'])
    .controller("SkymningCtrl", ['$scope', '$location', 'DataFactory', function($scope, $location, datafactory) {
        var key = datafactory.data.key;
        var data = '{"iv":"+ON6bgM9yNcSWV5e/YfTuA==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"8E8bJHu5nUQ=","ct":"W/yIrlio45HZU2DsA7KZuysxRVBIkcq07AJMiNDiWEJladO4H7U="}';
        $scope.text = sjcl.decrypt(key, data);
        $scope.step = function(p) {
            if(_.isEqual(sjcl.hash.sha256.hash(p), [941655620, -1938300190, -442061869, -252886345, 140124682, -187632233, -1720331080, -596862151])) {
                datafactory.data.key = p;
                $location.path("/goal");
            }
        }
}]);