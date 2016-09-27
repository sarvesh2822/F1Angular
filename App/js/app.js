angular.module('F1FeederApp', [
	'F1FeederApp.controllers', 
	'F1FeederApp.services', 
	'ui.router']).
	
	config(['$stateProvider', function($stateProvider) {
	  $stateProvider
					  .state('drivers', { // state for showing all drivers
					    title: 'Drivers',
					    url: '/drivers',
					    templateUrl: 'partials/drivers.html',
					    controller: 'driversController'
					  })
					  .state('driverinfo', { // state for showing one driver
					    title: 'DriverInfo',
					    url: '/drivers/:id/:year',
					    templateUrl: 'partials/driver.html',
					    controller: 'driverController'
					  });

					
 
	
}]);



	// when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	// when("/drivers/:id/:year", {templateUrl: "partials/driver.html", controller: "driverController"}).
	// when("/teams", {templateUrl: "partials/teams.html", controller: "teamsController"}).
	// otherwise({redirectTo: '/drivers'});