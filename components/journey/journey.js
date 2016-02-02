angular.module("Journey", ['Data'])
    .controller("JourneyCtrl", ['$scope', '$http', 'DataFactory', function($scope, $http, data) {
        var data = '{"iv":"FsssZvVQGWxyrEcstHMF3A==", "v":1, "iter":1000, "ks":128, "ts":64, "mode":"ccm", "adata":"", "cipher":"aes", "salt":"XzLHwbYDXoo=", "ct":"0UsfTPdP8A9TByk0j/EqfoztEQKrRg=="}',
        text = sjcl.decrypt(data.getKey, data);
}]);