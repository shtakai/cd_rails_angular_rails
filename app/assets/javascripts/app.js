var app = angular.module('nbaApp', ['ngRoute']);

app.config( function ($routeProvider, $httpProvider) {
  $routeProvider
    .when("/partial1", {
      templateUrl: "/partials/partial1.html",
      controller: "playersController"
    })
    .when("/partial2", {
      templateUrl: "/partials/partial2.html",
      controller: "teamsController"
    })
  // we are using jquery to get the value of the
  // token and setting in as a default header.
  // POST/PATCH/PUT/DELETE -> authenticity token
  // USU, <input type="hidden" name="authenticity_token" .... >
  //  on Rails
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
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
  var factory = {};
  // just grab teams
  factory.index = function(callback){
    $http.get("/teams").success(function(output){
      callback(output);
    })
  }

  // create team
  factory.create = function(teamInfo, callback){
    $http.post("/teams", teamInfo).success(function(output){
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
    // form includes
    //   newPlayer.player.first_name
    //   newPlayer: $scope
    //   player: hash  player = { first_name:----, last_name:--form-- }
    //    send this form hash to rails
    playerFactory.create($scope.newPlayer, function(json){
      //get all players and clear form(first_name, last_name)
      $scope.players = json;
      $scope.newPlayer = {};
    });
  }
})

app.controller("teamsController", function($scope, teamFactory){
  // index: returns teams
  teamFactory.index(function(json){
    $scope.teams = json;
  })

  // calling the create method from factory
  $scope.createTeam = function(){
    teamFactory.create($scope.newTeam, function(json){
      $scope.teams = json;
      $scope.newTeam = {};
    });
  }
})
