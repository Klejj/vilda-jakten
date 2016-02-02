angular.module("Journey", ['Data'])
    .controller("JourneyCtrl", ['$scope', '$http', 'DataFactory', function($scope, $http, datafactory) {
        var data = '{"iv":"KB2CCO2Ya9/tP/f9B0viCg==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"RiEDgwTfG6k=","ct":"itq6wAP5CLUItit/gFLuArnUYSAFOw=="}',
        text = sjcl.decrypt(datafactory.getKey, data);
}]);