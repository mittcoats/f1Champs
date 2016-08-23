'use strict';

// Declare app level module which depends on views, and components
angular.module('F1Champs', [  
  'F1Champs.controllers',
  'F1Champs.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when("/drivers", {templateUrl: "drivers/drivers.html", controller: "driversController"}).
  	when("/drivers/:id", {templateUrl: "drivers/driver.html", controller: "driverController"}).
  	otherwise({redirectTo: '/drivers'});
}]);
