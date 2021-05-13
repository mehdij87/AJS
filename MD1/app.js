(function () {
  "use strict";
    angular.module("appe", [])
        .controller("text", check);
  check.$inject = ['$scope'];
  function check($scope) {
    $scope.string = "";
    $scope.response = "";
    $scope.check = function () {
      let foodArray = $scope.string.split(",");
      if (foodArray.length > 3) {
        $scope.response = "Too Much";
      } else {
        $scope.response = "Yet Good";
      }
    };
  }
})();
