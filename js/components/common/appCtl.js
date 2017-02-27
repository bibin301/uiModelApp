(function() {
  'use strict';
  angular.module(appObj.id).controller('appctrl', appctrl);
  appctrl.$inject = ['$scope'];

  function appctrl($scope) {
    $scope.test = "hello"
  }
})();
