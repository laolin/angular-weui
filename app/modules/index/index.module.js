'use strict';

angular.module('myApp.index', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'modules/index/index.template.html',
    controller: ['$scope','$http','$log','Comm_AppData',function indexCtrl($scope,$http,$log,Comm_AppData) {
      $http.jsonp('http://api.qinggaoshou.com/hello/ip?callback=JSON_CALLBACK&r='+Date.now()).then(function(response) {
          $log.log(response);
          $scope.ip = response.data.ip;
        });
      Comm_AppData.setPageTitle('满足满意');
      Comm_AppData.setPageName('首页');

    }]
  });
}]);
