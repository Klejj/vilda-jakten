angular.module("Skymning", ['Data'])
    .controller("SkymningtCtrl", ['$scope', '$location', 'DataFactory', function($scope, $location, datafactory) {
        $scope.step = function(p) {
            if(_.isEqual(sjcl.hash.sha256.hash(p), [-1687690913, 656052728, 1973603027, 1555569003, 2045191929, -978153975, 272095033, -1413294086])) {
                datafactory.data.key = p;
                $location.path("/goal");
            }
        }
}]);