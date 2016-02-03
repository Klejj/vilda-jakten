angular.module("Goal", ['Data'])
    .controller("GoalCtrl", ['$scope', '$location', 'DataFactory', function($scope, $location, datafactory) {
        var key = datafactory.data.key;
        var data = '{"iv":"EsKhOl3ddzgUsNQuWrByWA==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"2O//g+ByFBA=","ct":"SoAydSiFNVMaz2LjWJ/8msGmqFAKwQ8nxKBPMHrLCW2BRsivKKo8TJBJCSPy14e7NBYRUBPKbUJKnh46K0KkSDTrsbk9RChI3kI4GW2uB3O3WKqXSA44saLK5aNDU0cRr4VqclQD0qLLTec="}';
        $scope.text = sjcl.decrypt(key, data);