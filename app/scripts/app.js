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

/** CONTROLLERS **/
  myApp.controller("headerCtrl", function($scope){

  });

  myApp.controller("menuCtrl", function($scope){
    $scope.expanders = [
        {title: 'Titre 1',
         text: 'Contenu 1'},
        {title: 'Titre 2',
         text: 'Contenu 2'},
        {title: 'Titre 3',
         text: 'Contenu 3'}
    ];
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

/** DIRECTIVES **/
myApp.directive("expander", function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordion',
        scope: {title: '=expanderTitle'},
        template: '<div>' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs, accordionController){
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle(){
              scope.showMe = !scope.showMe;
              accordionController.gotOpened(scope);
            };
        }
    };
});

myApp.directive("accordion", function(){
  return{
      restrict: 'EA',
      replace: true,
      transclude: true,
      template: "<div ng-transclude></div>",
      controller: function(){
          var expanders = [];
      this.gotOpened = function(selectedExpander){
        expanders.forEach(function(expander){
          if(selectedExpander != expander){
            expander.showMe = false;
          }
        });
      };
      this.addExpander = function(expander){
        expanders.push(expander);
      };
    }
  };
});
