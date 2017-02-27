(function() {
  'use strict';
  angular
    .module(appObj.id)
    .config(appConfig);
  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'js/components/login/login.html',
        controller: 'loginCtrl',
      }).state('dashboard', {
        url: '/dashboard',
        templateUrl: "js/components/dashboard/dashboard.html",
        controller: 'dashboardCtrl',
      }).
    state('dashboard.address', {
      url: '/addressForm',
      templateUrl: "js/components/addressForm/address.html",
      controller: 'addressCtrl',
    }).state('dashboard.list', {
      url: '/list',
      templateUrl: "js/components/list/list.html",
      controller: 'listCtl',
    });
  }

})();
