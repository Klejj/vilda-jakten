angular.module("Data")
.factory('Data', function() {
    var data = {
        key: ''
    };
    return {
        getKey: function () {
            return data.key;
        },
        setKey: function (key) {
            data.key = key}
    };
});