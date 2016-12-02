'use strict';

angular.module('myApp.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'modules/list/list.template.html',
    controller: 'listCtrl'
  });
}])

.controller('listCtrl', [function() {

}]);