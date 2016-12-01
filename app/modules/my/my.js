'use strict';

angular.module('myApp.my', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/my', {
    templateUrl: 'modules/my/my.html',
    controller: 'myCtrl'
  });
}])

.controller('myCtrl', [function() {

}]);