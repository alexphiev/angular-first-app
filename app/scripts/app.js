'use strict';

/**
 * @ngdoc overview
 * @name firstAppApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */


 var myApp = angular.module('firstAppApp',[]);

  myApp.controller("headerCtrl", function($scope){
      //...
  });

  myApp.controller("menuCtrl", function($scope){
      //...
  });

  myApp.controller("contentCtrl", function($scope){
      $scope.age = 0;
      $scope.majeurOrMineurText = function(){
          return ($scope.age >= 18) ? "majeur" : "mineur";
      };
   });

  myApp.controller("footerCtrl", function($scope){
     //...
  });
