angular.module('F1FeederApp.controllers', []).
/* 	Drivers controller*/
controller('driversController', function($scope, $rootScope, $stateParams, ergastAPIservice) {
    
	$scope.nameFilter = null;
	$scope.driversList = [];
//$scope.selectedYear.selectedValue = new Date().getFullYear();
  var years = [];
  for (var i = 1950; i <= new Date().getFullYear(); i++) {
       years.push(i);
    }
  
  $scope.years = years;
	$scope.searchFilter = function (driver) {
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
  };

  var currentYear = new Date().getFullYear();
  if (!$stateParams.year || $stateParams.year > currentYear) 
    $stateParams.year = currentYear;
    $rootScope.rootYear = $stateParams.year;
    ergastAPIservice.getDrivers(currentYear).success(function (response){
    console.log('driver' + currentYear);
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  });


  $scope.yearchange = function (year){
  console.log('selected year' + year);
  ergastAPIservice.getDrivers(year).success(function (response){
  console.log('driver' + year);
  $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  });
}

	


}).

  /* Driver controller */
  controller('driverController', function($scope, $rootScope, $stateParams, ergastAPIservice) {
    var id = $stateParams.id;
    console.log('id of the link' + id);

    console.log('year of tjhe link' + $stateParams.year);
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails(id, $stateParams.year).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];  
    });

    ergastAPIservice.getDriverRaces(id, $stateParams.year).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 
  })

  .controller('teamsController', function($scope, ergastAPIservice){


  	$scope.teams = [];

  	ergastAPIservice.getTeams().success(function(response){

  		$scope.teams = response.MRData.ConstructorTable.Constructors;
  	});


  });