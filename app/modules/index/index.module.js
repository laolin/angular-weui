'use strict';

angular.module('myApp.index', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'modules/index/index-1.html',
    controller: 'indexCtrl'
  });
}])

.controller('indexCtrl', ['$scope',function($scope) {
  $scope.a='123';
  $scope.b='BASF';

}])
;