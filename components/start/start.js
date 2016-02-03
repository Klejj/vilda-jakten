angular.module("Start", ['Data'])
    .controller("StartCtrl", ['$scope', '$location', 'DataFactory', function($scope, $location, datafactory) {
        $scope.go = function(p) {
            if(sjcl.hash.sha256.hash(p) === '9b67e15f271a91f875a2cad35cb8196b79e726f9c5b28e091037d739abc2d7fa') {
                datafactory.data.key = p;
                $location.path("/journey");
            }
        }
}]);