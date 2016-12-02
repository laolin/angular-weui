'use strict';
angular.module('myApp.main', ['ngRoute'])
.controller('mainController', ['$scope',function($scope) {
  $scope.appTitle='AppName';
  $scope.pageTitle='Page Name';
}])
;
    
// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'myApp.main','myApp.index', 'myApp.my', 'myApp.list', 'myApp.search']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/index'});
}]);
