'use strict';
var angular = require('angular');

var app = angular.module('happyPosts', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope){

  $scope.posts = [
  {title: 'Post 1', upvotes: 5},
  {title: 'Post 2', upvotes: 2},
  {title: 'Post 3', upvotes: 15},
  {title: 'Post 4', upvotes: 9},
  {title: 'Post 5', upvotes: 4}
  ];

  $scope.addPost = function(){
    //Prevent user from submitting blank
    if(!$scope.title || $scope.title === ''){
      return
    }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0});
    $scope.title='';
    $scope.link='';
  }

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  }

});
