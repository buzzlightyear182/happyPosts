'use strict';
var angular = require('angular');

var app = angular.module('happyPosts', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope){
  $scope.test = 'Hello World!';
  $scope.posts = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
});
