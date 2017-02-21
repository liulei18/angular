(function(angular) {
  'use strict';


  // 1. 为应用程序创建一个模块，用来管理界面的结构
  var myApp = angular.module('app', ['ngRoute','app.controllers.main']);

  //路由配置
  myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/:status?',{
        controller:'MainController',
        templateUrl:'main_tmpl'

      })
      .otherwise({
        redirectTo:'/'
      });
  }]);

  // 2. 注册一个主要的控制器（属于某个模块），用于往视图（view）中暴露数据
  

})(angular);
