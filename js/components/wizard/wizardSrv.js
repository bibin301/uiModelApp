


(function() {
  'use strict';

  angular.module(appObj.id)
    .factory('Srv', Srv);

  Srv.$inject = ['$http'];

  function Srv($http) {
    return {

      getList: function(usrData) {
        return $http({
           //url: 'mobileapp.constient.com/bharathtemp/dealerCodeEmployeeList.php',
          url: 'js/components/wizard/data.json',
          method: "get",

        });

      }



    }
  }
})();
