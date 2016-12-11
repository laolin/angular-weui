'use strict';

angular.module('myApp.shop', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shop', {
    templateUrl: 'modules/shop/shop.template.html',
    controller: ['$scope','$http','$log','CommData',function shopCtrl($scope,$http,$log,CommData) {
      var D=gAppIndexConfig.dataShops;
      var init=function() {
        $log.log(D);
        $scope.D=D;
        if(! D.init) {//未初始化
          D.init=true;
          D.searchHistoryMax=4;
          D.searching=false;
          D.searchWords='';
          D.searchHistory=[];
          D.shops=[];
        }
        CommData.setPageName('店列表');

      }
      init();
      
      $scope.getData = function (w){
        var old_index;
        if(typeof(w)!=='undefined')D.searchWords=w;
        D.searching=true;
        if(D.searchWords) {
          old_index = D.searchHistory.indexOf(D.searchWords);
          if(old_index>=0) D.searchHistory.splice(old_index,1);
          D.searchHistory.splice(0,0,D.searchWords);//insert as the first
          if(D.searchHistory.length>D.searchHistoryMax)D.searchHistory.pop();
          
          //$log.log('search word = '+D.searchWords);
        }
        $http.jsonp(D.apiShopList+'/foot/search?s='+ encodeURI(D.searchWords) +'&callback=JSON_CALLBACK&r='+Date.now() )
            .then(function(response) {
          $log.log(response);
          D.shops = response.data.data;
          D.searching=false;
        });
        return false;
      }
      

    }] // END of controller function shopCtrl
  });
}])
