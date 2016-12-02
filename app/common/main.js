'use strict';

angular.module('myApp.main', ['ngRoute'])

.controller('mainController', ['$scope',function($scope) {
  $scope.appTitle='AppName';
  $scope.pageTitle='Page Name';
}])
;

function initApp(appName,modList,defRoute) {
  // Declare app level module which depends on views, and components
  angular.module(appName, modList).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: defRoute});
  }]);
}