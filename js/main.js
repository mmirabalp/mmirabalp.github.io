var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/home.htm"
        })
        .when("/project", {
            templateUrl : "views/project.htm"
        })
        .otherwise("/");

});