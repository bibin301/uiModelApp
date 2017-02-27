(function(){
	'use strict';
  angular.module(appObj.id).controller('addressCtrl',addressCtrl);
  addressCtrl.$inject = ['$scope','addressSrv'];
  function addressCtrl($scope,addressSrv){
  	 $scope.addressModel ={}


    $scope.addressModel.bloogGroup =[{"gn":"o+"},{"gn":"a+"},{"gn":"b+"},
    {"gn":"ab+"},{"gn":"o-"},{"gn":"a-"},{"gn":"b-"},{"gn":"ab-"}];

     $scope.addressModel.eduQualification =[{"edu":"BE","id":"1"},{"edu":"Arts and science","id":"2"},{"edu":"medical","id":"3"}];







$scope.addressModel.usrRes ={};

$scope.photoChang = function(files){

  $scope.files = files;
      var reader = new FileReader();
      reader.onload = function(e) {
        $scope.addressModel.usrRes.gg = e.target.result;
        console.log("image file3" , $scope.addressModel.usrRes.gg)
        if (!$scope.$$phase) {
          $scope.$apply();
        }
      };
      reader.readAsDataURL(files[0]);

};


$scope.photoChange = function(files){

  $scope.files = files;
      var reader = new FileReader();
      reader.onload = function(e) {
        $scope.addressModel.usrRes.g = e.target.result;
        console.log("image file4" , $scope.addressModel.usrRes.g)
        if (!$scope.$$phase) {
          $scope.$apply();
        }
      };
      reader.readAsDataURL(files[0]);

};



$scope.addressModel.getUserData=getUserData;

function getUserData(usr,usr1){

	console.log("user information" ,usr,usr1);




	var data = {
		"EmployeeAddress1":usr.add1 ,
  "EmployeeAddress2": usr.add2,
  "EmployeeBloodGroup": usr.bg,
  "EmployeeBranchId": usr.empBranchid,
  "EmployeeCityId": usr.empCityId,
  "EmployeeDOB": usr.empDob,
  "EmployeeDealership": usr.empdealship,
  "EmployeeEmergencyContact": usr.empEmerContactNo,
  "EmployeeGender": usr.empgen,

  "EmployeeMobileNo":usr.empmobileno,
  "EmployeeName": usr.empname,
  "accno": usr.accNum,
  "bankname": usr.bankName,
  "dateofjoining": usr.doj,
  "education_qualification": usr.eduQ,
  "maritalstatus": usr.Maritalstatus,
  "nomineename":usr.nomineename,
  "noofchildrenboys": usr.boychild,
  "noofchildrengirls": usr.girlchild,
  "pancard": usr.pancard,
  "pminsuranceschemesubscribed": usr.pmsubcribed,
  "pradhanmantrijandhanyojana": usr.Pradhanmantrijandhanyojana,
  "pradhanmantrijeevanjyotibimayojana": usr.pradhanmantrijeevanjyotibimayojana,
  "safetytraining": usr.safetytraining,
  "servicetraining": usr.servicetraining,
  "shirt_size": usr.shirtsize,
  "shoesize": usr.shoesize,
  "EmployeePhoto" : usr1.gg,
	"EmployeeIDProof" : usr1.g
	};



addressSrv.userCreate(data).success(function(){

console.log("sucess");
}).error(function(err){
	console.log("failed");
})


  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };

  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };



  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
}


  }

})();


function isNumberKey(evt) {

  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode != 43 && charCode > 31 && (charCode < 48 || charCode > 57))
    if (charCode != 45 && charCode > 31 && (charCode < 48 || charCode > 57))
      if (charCode != 32 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

  return true;

}
