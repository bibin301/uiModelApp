(function(){
  angular.module(appObj.id).controller('tableCtl',tableCtl);
  tableCtl.$inject = ['$scope','tableSrv'];
  function tableCtl($scope,tableSrv){

    tableSrv.getList().success(function(s){
      console.log(s)
      $scope.data=s;
    })






  }

})();
