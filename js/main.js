var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.htm",
            controller: "homeCtrl"
        })
        .when("/project/:id", {
            templateUrl: "views/project.htm",
            controller: "projectCtrl"
        })
        .otherwise("/");

});


// Json data projects connection
app.controller('homeCtrl', function($scope, $http) {

    $http.get('js/data.json').then(function (response) {
        $scope.projects = response.data;
    });

});

// Json data projects connection
app.controller('projectCtrl', function($scope, $routeParams) {

    console.log( $routeParams.id );
    console.log( $scope.title );

});

