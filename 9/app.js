(function () {
    'use strict'
    angular.module('nameC', [])
        .controller('nameCCal', CCal);
    CCal.$inject = ['$scope', '$filter']
    function CCal($scope, $filter) {
        $scope.name = "mehdi";
    $scope.displayCal = function () {
        let upper = $filter('uppercase');
        $scope.name = upper($scope.name);

    }
    }
})();
// !function(){"use strict";function e(e,n){e.name="mehdi",e.displayCal=function(){let a=n("uppercase");e.name=a(e.name)}}angular.module("nameC",[]).controller("nameCCal",e),e.$inject=["$scope","$filter"]}();