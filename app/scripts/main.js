'use strict';
var angular = require('angular');

var app = angular.module('happyPosts', ['ui.router','ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

    $stateProvider.state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');
});

app.factory('posts', function(){
  var p = {posts: [
    {title: 'Post 1', upvotes: 5, comments:[]},
    {title: 'Post 2', upvotes: 2, comments:[]},
    {title: 'Post 3', upvotes: 15, comments:[]},
    {title: 'Post 4', upvotes: 9, comments:[]},
    {title: 'Post 5', upvotes: 4, comments:[]}
    ]};
  return p;
});

app.controller('MainCtrl', function($scope, posts){

  $scope.posts = posts.posts;

  $scope.addPost = function(){
    //Prevent user from submitting blank
    if(!$scope.title || $scope.title === ''){
      return;
    }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        // {author: 'test01', body: 'this is a fake comment 01', upvotes: 0},
        // {author: 'test02', body: 'this is a fake comment 02', upvotes: 0}
      ]
    });
    $scope.title='';
    $scope.link='';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };

});

app.controller('PostsCtrl', function($scope,$stateParams,posts){
  $scope.post = posts.posts[$stateParams.id];

  $scope.addComment = function(){
    if($scope.body === ''){
      return;
    }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };

});
