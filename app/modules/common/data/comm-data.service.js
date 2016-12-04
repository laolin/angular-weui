'use strict';

angular.module('comm.data').
  factory('CommData',['$rootScope',function($rootScope) {
  
    $rootScope.appInfo={};
    $rootScope.appInfo.pageTitle='Welcome to app';
    $rootScope.appInfo.pageName='page loading';
    $rootScope.appInfo.appName='满足满意';
    
    function setPageTitle(t) {
      $rootScope.appInfo.pageTitle=t;
    }
    function getPageTitle() {
      return $rootScope.appInfo.pageTitle;
    }
    function setPageName(t) {
      $rootScope.appInfo.pageName=t;
    }
    function getPageName() {
      return $rootScope.appInfo.pageName;
    }
    function setAppName(t) {
      $rootScope.appInfo.appName=t;
    }
    function getAppName() {
      return $rootScope.appInfo.appName;
    }
    

    //页面下方的主Tab按钮
    var tabsInfo=[
      {href:"#!/index",icon:'home',name:'首页',active:1},
      {href:"#!/list",icon:'university',name:'列表',active:0},
      {href:"#!/search",icon:'search',name:'发现',active:0},
      {href:"#!/my",icon:'user',name:'我',active:0}
    ];
    $rootScope.tabsInfo=tabsInfo;
    function setTabsInfo(t) {
      $rootScope.tabsInfo=t;
    }
    function getTabsInfo() {
      return $rootScope.tabsInfo;
    }
    function activeTab(a) {
      var i,n=$rootScope.tabsInfo.length;
      for(i=0;i<n;i++) {
        $rootScope.tabsInfo[i].active = (i==a);
      }
      setPageTitle($rootScope.tabsInfo[a].name + ' - ' + $rootScope.appInfo.appName);
      setPageName($rootScope.tabsInfo[a].name);
      return a;
    }
    activeTab(0);
    
    
    
    return {
      activeTab:activeTab,
      
      setTabsInfo:setTabsInfo,
      getTabsInfo:getTabsInfo,
      setPageTitle:setPageTitle,
      getPageTitle:getPageTitle,
      setPageName:setPageName,
      getPageName:getPageName,
      setAppName:setAppName,
      getAppName:getAppName
    };
  
  }]);