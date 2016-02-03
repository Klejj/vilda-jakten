angular.module("Journey", ['Data'])
    .controller("JourneyCtrl", ['$scope', '$http', 'DataFactory', function($scope, $http, datafactory) {
        var key = datafactory.data.key;
        var data = '{"iv":"fMJWzPzkTnMfYLS1RDma/Q==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"74m+06K/U9w=","ct":"nIptY2B5aIODN+Ws7qODGJlF8RAAlBaLXExpVHnyzRyvKbwMmc2mL7DAxlE/2fBbbiz9s71vTqYc/DQDoCZ02ib6hCw="}';
        alert(sjcl.decrypt(key, data));
        $scope.text = sjcl.decrypt(key, data)
}]);