


(function() {
  'use strict';

  angular.module(appObj.id)
    .factory('addressSrv', addressSrv);

  addressSrv.$inject = ['$http'];

  function addressSrv($http) {
    return {
      
      userCreate: function(usrData) {
        return $http({
          url: 'mobileapp.constient.com/bharathtemp/employeeSave.php',
          method: "POST",
          data: usrData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

      }
    
     

    }
  }
})();
