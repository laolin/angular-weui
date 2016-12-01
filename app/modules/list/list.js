'use strict';

angular.module('myApp.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'modules/list/list.html',
    controller: 'listCtrl'
  });
}])

.controller('listCtrl', [function() {

}]);