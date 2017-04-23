

//https://github.com/angular/angular.js/wiki/JsFiddle-Examples
(function() {
  'use strict';
  angular.module(appObj.id).controller('wizardCtl', wizardCtl);
  wizardCtl.$inject = ['$scope','Srv'];

  function wizardCtl($scope,Srv) {
    $scope.disabled = 'true';
    $scope.test = "hello"




Srv.getList().success(function(data){


  // Highcharts requires the y option to be set
  $.each(data, function (i, point) {
      point.y = point.data;
  });


  var chart = new Highcharts.Chart({

      chart: {
          renderTo: 'container1',
          type: 'pie'
      },

      series: [{
          data: data
      }]

  });

})
Srv.getList1().success(function(data){


  // Highcharts requires the y option to be set
  $.each(data, function (i, point) {
      point.y = point.data;
  });


  var chart = new Highcharts.Chart({

      chart: {
          renderTo: 'container2',
          type: 'pie'
      },

      series: [{
          data: data
      }]

  });

})

  }
})();
//http://stackoverflow.com/questions/14396348/highcharts-to-populate-data-for-pie-chart-using-json-object
