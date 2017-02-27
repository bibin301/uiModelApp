


(function() {
  'use strict';

  angular.module(appObj.id)
    .factory('loginSrv', loginSrv);

  loginSrv.$inject = ['$http'];

  function loginSrv($http) {
    return {
      
      loginCreate: function(usrData) {
        return $http({
          url: 'mobileapp.constient.com/bharathtemp/dealerlogin.php',
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
