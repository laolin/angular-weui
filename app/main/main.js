'use strict';

function initApp(appName,modList,defRoute) {
// Declare app level module which depends on views, and components
angular.module(appName, modList).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: defRoute});
}]);
}