(function(){
  'use strict';
  angular.module(appObj.id).controller('loginCtrl',loginCtrl);
  loginCtrl.$inject = ['$scope','$location','loginSrv'];
  function loginCtrl($scope,$location,loginSrv){

    

    $scope.submit =function(us){
      console.log("get input value" , us);
      var uname= $scope.username;
      var upassword = $scope.password;
      if(us.name =='007' && us.pass=='1234'){
        $location.path('/dashboard');
      }else{
        $scope.errorMessage ="invalid credientials"
      }

      var data ={
     "buildversion": 1,
     "dealercode":us.name,
     "dealerpassword":us.pass
      };

// loginSrv.loginCreate(data).success(function(){

// $location.path('/dashboard');

// console.log("success");
// }).error(function(err){
// $scope.errorMessage ="please try again"
//   console.log("failed");
// })
    }

  }
})();
