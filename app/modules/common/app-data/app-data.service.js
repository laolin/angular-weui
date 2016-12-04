'use strict';

angular.module('common.appData').
  factory('Comm_AppData',['$rootScope',function($rootScope) {
  
    $rootScope.appInfo={};
    $rootScope.appInfo.pageTitle='Welcome to app';
    $rootScope.appInfo.pageName='page loading';
    
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
    return {
      setPageTitle:setPageTitle,
      getPageTitle:getPageTitle,
      setPageName:setPageName,
      getPageName:getPageName
    };
  
  }]);