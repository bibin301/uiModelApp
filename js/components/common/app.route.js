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
    }).state('dashboard.dataTable',{
      url:'/dataTable',
      templateUrl:"js/components/dataTable/datatabe.html",
      controller:"tableCtl"
    }).state('dashboard.menubar',{
      url:'/menubar',
      templateUrl:"js/components/menubar/menubar.html",
      controller:"menuCtl"
    }).state('dashboard.tab',{
      url:"/tab",
      templateUrl:"js/components/tab/tab.html"
    }).state('dashboard.tab.profile',{
      url:"/profile",
      templateUrl:"js/components/tab/profile.html"
    }).state('dashboard.tab.kyc',{
      url:"/kyc",
      templateUrl:"js/components/tab/kyc.html"

    }).state('dashboard.tab.password',{
      url:"/password",
      templateUrl:"js/components/tab/password.html"
    })
    .state('dashboard.wizard',{
      url:"/wizard",
      templateUrl:"js/components/wizard/wizard.html",
      controller:"wizardCtl"
    })
  }

})();
