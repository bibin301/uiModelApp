


(function() {
  'use strict';

  angular.module(appObj.id)
    .factory('tableSrv', tableSrv);

  tableSrv.$inject = ['$http'];

  function tableSrv($http) {
    return {

      getList: function(usrData) {
        return $http({
           //url: 'mobileapp.constient.com/bharathtemp/dealerCodeEmployeeList.php',
          url: 'js/components/dataTable/data.json',
          method: "get",

        });

      }



    }
  }
})();
