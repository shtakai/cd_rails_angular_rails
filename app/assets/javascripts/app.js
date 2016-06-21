var app = angular.module('nbaApp', ['ngRoute']);

app.config( function ($routeProvider) {
  $routeProvider
    .when("/partial1", {
      templateUrl: "/partials/partial1.html",
      controller: "playersController"
    })
    .when("/partial2", {
      templateUrl: "/partials/partial2.html",
      controller: "teamsController"
    })

});


app.factory("playerFactory", function ($http) {
  var factory = {};
  // show player list
  factory.index = function(callback) {
    $http.get("/players").success(function(output){
      callback(output);
    })
  }

  // create player
  factory.create = function(playerInfo, callback){
    $http.post("/players", playerInfo).success(function(output){
      callback(output);
    })
  }

  return factory;
})

app.factory("teamFactory", function ($http) {
  var factory = {}
  factory.index = function(callback){
    $http.get("/teams").success(function(output){
      callback(output);
    })
  }
  return factory;
})

app.controller("playersController", function ($scope, playerFactory) {
  playerFactory.index(function(json) {
    $scope.players = json;
  })

  // calling the create method from factory
  $scope.createPlayer = function(){
    playerFactory.create($scope.newPlayer, function(json){
      $scope.players = json;
      $scope.newPlayer = {};
    });
  }
})

app.controller("teamsController", function($scope, teamFactory){
  teamFactory.index(function(json){
    $scope.teams = json;
  })
})
