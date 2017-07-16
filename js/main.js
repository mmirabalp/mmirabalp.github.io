var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/home.htm"
        }).
        when("/home", {
            templateUrl : "views/home.htm"
        }).
        when("/project", {
            templateURL : "views/project.htm"
        }).
        otherwise("/");

});