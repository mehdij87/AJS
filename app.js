(function () {
  "use strict";
  angular.module("nameC", []).controller("nameCCal", function ($scope) {
    $scope.name = "";
    $scope.total = 0;
    $scope.displayCal = function () {
      let totalNamveValue = calculateNumericForString($scope.name);
      $scope.total = totalNamveValue;
    };
    function calculateNumericForString(string) {
      let totalStringValue = 0;
      for (let i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });
})();
