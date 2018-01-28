var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.styles= ["quick-table1","quick-table2","quick-table3"];
    $scope.colors= [
        "table-black",
        "table-grey",
        "table-brown",
        "table-purple",
        "table-blue",
        "table-teal",
        "table-cyan",
        "table-light-green",
        "table-green",
        "table-orange",
        "table-pink",
        "table-red"
    ];
});