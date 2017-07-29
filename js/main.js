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




app.factory("dataAccess", function($http){

  return{
      infoData : function (){
          return $http.get('js/data.json').then(function(response){
              return response.data;
          });
      }
  };

});




app.controller('homeCtrl', function($scope, dataAccess, $q){

    $q.all([dataAccess]).then(function(){
        dataAccess.infoData().then(function(info){
            $scope.projects = info;
        });
    });
});




app.controller('projectCtrl', function($routeParams, $scope, dataAccess, $q){
    var id = $routeParams.id - 1;

    $q.all([dataAccess]).then(function(){
        dataAccess.infoData().then(function(info){
            $scope.project = info[id];
            return $scope.project;
        });
    });
});
