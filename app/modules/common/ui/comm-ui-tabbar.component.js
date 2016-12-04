'use strict';

angular.module('comm.UiTabbar').
  component('commUiTabbar',{
    templateUrl:'res/template/common/ui/comm-ui-tabbar.html',
    controller:['$log','$rootScope','CommData',function($log,$rootScope,CommData) {
      $log.log("$rootScope in commUiTabbar's controller");
      $log.log($rootScope);
      $log.log("this in commUiTabbar's controller");
      $log.log(this);
      this.tabsInfo=CommData.getTabsInfo();
      this.activeTab=CommData.activeTab;
    }]}
  );