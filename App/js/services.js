angular.module('F1FeederApp.services', []).
factory('ergastAPIservice', function($http){

var ergastAPI = {};

ergastAPI.getDrivers = function(year){
	return $http({
		method:'JSONP',
		url:'http://ergast.com/api/f1/'+ year +'/driverStandings.json?callback=JSON_CALLBACK'
	});

}

ergastAPI.getDriverDetails = function(id,year){
	return $http({
		method:'JSONP',
		url:'http://ergast.com/api/f1/'+ year +'/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
	});
}

ergastAPI.getDriverRaces = function(id,year){
	return $http({
		method:'JSONP',
		url: 'http://ergast.com/api/f1/'+ year +'/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'

	});

}

ergastAPI.getTeams = function(){
	return $http({
		method:'JSONP',
		url:'http://ergast.com/api/f1/2016/constructors.json?callback=JSON_CALLBACK'
	})
}

return ergastAPI;

});