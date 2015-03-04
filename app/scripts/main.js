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
    {title: '24 Hours of Happy', link: "http://24hoursofhappy.com/", description: "Pharell's music video" , upvotes: 1, comments:[]},
    {title: '100happydays', link: "http://100happydays.com/", description: 'Challenge yourself to 100 days of happiness', upvotes: 2, comments:[]},
    {title: 'What is Happiness?', link:"http://us.coca-cola.com/happiness/", description: 'Happiness from Coca-cola', upvotes: 3, comments:[]},
    {title: '7 Essential Books on the Art and Science of Happiness', link:"http://www.brainpickings.org/2011/01/25/must-read-books-happiness/", description: 'Brainpickings.org choices', upvotes: 4, comments:[]},
    {title: '12 Secrets of Being Happy', link:"http://www.dailymail.co.uk/femail/article-2090271/12-secrets-happy-Using-research-100-world-experts-new-book-shows-look-bright-side.html", description: 'From the dailymail.co.uk - Using research from 100 world experts, a new book shows how to look on the bright side', upvotes: 5, comments:[]}
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
      description: $scope.description,
      upvotes: 0,
      comments: [
        // {author: 'test01', body: 'this is a fake comment 01', upvotes: 0},
        // {author: 'test02', body: 'this is a fake comment 02', upvotes: 0}
      ]
    });
    $scope.title='';
    $scope.link='';
    $scope.description = '';
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
