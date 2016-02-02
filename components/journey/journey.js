angular.module("Journey")
    .controller("JourneyCtrl", ['$scope', '$http', function($scope, $http) {
        var data = '{"iv":"FsssZvVQGWxyrEcstHMF3A==", "v":1, "iter":1000, "ks":128, "ts":64, "mode":"ccm", "adata":"", "cipher":"aes", "salt":"XzLHwbYDXoo=", "ct":"0UsfTPdP8A9TByk0j/EqfoztEQKrRg=="}',
        text = sjcl.decrypt(DataFactory.getKey, data);
}]);