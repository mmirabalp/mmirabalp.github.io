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


// Json data projects connection
app.controller('projectsCtrl', function($scope, $http) {

    $http.get('js/data.json').then(function (response) {
        $scope.projects = response.data;
    });

});

