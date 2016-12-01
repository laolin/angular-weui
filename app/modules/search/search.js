'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'modules/search/search.html',
    controller: 'searchCtrl'
  });
}])

.controller('searchCtrl', [function() {

}]);