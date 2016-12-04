'use strict';

angular.module('myApp.shop', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shop', {
    templateUrl: 'modules/shop/shop.template.html',
    controller: ['$scope','$http','$log','Comm_AppData',function shopCtrl($scope,$http,$log,Comm_AppData) {
      var D={};
      var init=function() {
        $log.log(D);
        $scope.D=D;
        $scope.searching=false;
        $scope.searchWords='';
        $scope.searchHistoryMax=4;
        $scope.searchHistory=[];
        D.shops=[];
        D.apiRoot='http://api.qinggaoshou.com';
        Comm_AppData.setPageTitle('店列表 - 满足满意');
        Comm_AppData.setPageName('店列表');

      }
      init();
      
      $scope.getData = function (w){
        var old_index;
        if(typeof(w)!=='undefined')$scope.searchWords=w;
        $scope.searching=true;
        if($scope.searchWords) {
          old_index = $scope.searchHistory.indexOf($scope.searchWords);
          if(old_index>=0) $scope.searchHistory.splice(old_index,1);
          $scope.searchHistory.splice(0,0,$scope.searchWords);//insert as the first
          if($scope.searchHistory.length>$scope.searchHistoryMax)$scope.searchHistory.pop();
          
          //$log.log('search word = '+$scope.searchWords);
        }
        $http.jsonp(D.apiRoot+'/foot/search?s='+ encodeURI($scope.searchWords) +'&callback=JSON_CALLBACK&r='+Date.now() )
            .then(function(response) {
          $log.log(response);
          D.shops = response.data.data;
          $scope.searching=false;
        });
        return false;
      }
      

    }] // END of controller function shopCtrl
  });
}])
