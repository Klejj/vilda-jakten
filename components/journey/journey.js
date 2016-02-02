angular.module("Journey")
    .controller("JourneyCtrl", ['$scope', '$http', 'Data', function($scope, $http, Data) {
        var data = '{"iv":"FsssZvVQGWxyrEcstHMF3A==", "v":1, "iter":1000, "ks":128, "ts":64, "mode":"ccm", "adata":"", "cipher":"aes", "salt":"XzLHwbYDXoo=", "ct":"0UsfTPdP8A9TByk0j/EqfoztEQKrRg=="}',
        text = sjcl.decrypt(Data.getKey, data);
}]);