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

app.controller("playersController", function ($scope) {
  $scope.players = [
    { firstName: "Sasimi", lastName: "Udon" },
    { firstName: "Nikuud", lastName: "Niku" },
    { firstName: "Takagi", lastName: "Tare" },
    { firstName: "Ikacho", lastName: "Tori" },
    { firstName: "Shimur", lastName: "Kane" },
    { firstName: "Tashia", lastName: "Omae" },
    { firstName: "Katouu", lastName: "Play" },
    { firstName: "Kireta", lastName: "Jojo" }
  ]
})

app.controller("teamsController", function ($scope) {
  $scope.teams = [
    {name: "Hanshin Tigers"},
    {name: "Hankyu Braves"},
    {name: "Yomiuri Giants"},
    {name: "Yokohama Baysters"},
    {name: "Chiba Marines"},
    {name: "Seattle Sashimi"},
    {name: "Chiang Mai FC"},
    {name: "Yakult Swallows"},
    {name: "Nankai Hawks"},
    {name: "Osashimi Tabetaina"},
    {name: "Yamikin Ushijima Kun"},
    {name: "Shinjyuku Swan"},
    {name: "Seattle Nirvana"},
    {name: "Seattle Mudhoney"},
    {name: "Hong Kong Triads"},
    {name: "Chiang Nai Indeans"},
    {name: "Kobe Yakuza"}
  ]
})
