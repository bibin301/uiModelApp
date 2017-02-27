


(function() {
  'use strict';

  angular.module(appObj.id)
    .factory('listSrv', listSrv);

  listSrv.$inject = ['$http'];

  function listSrv($http) {
    return {

      getList: function(usrData) {
        return $http({
           //url: 'mobileapp.constient.com/bharathtemp/dealerCodeEmployeeList.php',
          url: 'js/components/list/data.json',
          method: "get",

        });

      }



    }
  }
})();
