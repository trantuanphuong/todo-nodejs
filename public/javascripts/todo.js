var app = angular.module('myApp',[]); // same to the above define appName
      app.controller('Ctrl',function($scope){
        $scope.appName = "Checklist Todo!!!";

        $scope.todos = [
          {
            text = "Tìm hiểu nodejs!",
            isDone = false
          },
          {
            text = "Tìm hiểu expressjs!",
            isDone = false
          },
          {
            text = "Tìm hiểu angular!",
            isDone = false
          },
          {
            text = "Tìm hiểu javascript!",
            isDone = false
          },
          {
            text = "Làm demo thực hành!",
            isDone = false
          }
        ];
      });