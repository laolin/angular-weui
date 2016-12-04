'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
    'myApp.shop',
    
    'myApp.index',
    'myApp.my',
    'myApp.list',
    'myApp.search',
    
    'common'
  ]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/index'});
}]);
