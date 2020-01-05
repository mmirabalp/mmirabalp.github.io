//DECLARING ANGULAR MODULE AND app Name: 'myApp',
//Injecting 'ngRoute' dependency module to use for routes in app.
var app = angular.module("myApp", ["ngRoute"]);

//Configuring the route of the application.
//$routeProvider is a directive inside ngRoute module
app.config(function($routeProvider) {
    $routeProvider
      .when("/", {
        //(when) is a method inside $routeProvider directive
        templateUrl: "../views/home.htm", //templateUrl contain the browser route as it is there...
        controller: "homeCtrl" //Declaring de controller that is going to control this view: "views/home.htm" when the user go to that route in browser
      })
      .when("/project/:id", {
        //'_______'/:id . is a variable value that  $routeParams is going to get.
        templateUrl: "../views/project.htm",
        controller: "projectCtrl"
      })
      .when("/style", {
        //'_______'/:id . is a variable value that  $routeParams is going to get.
        templateUrl: "../views/style.htm"
      })

      .otherwise("/");   //Default route that goes to HOME.

});




//DECLARING A SERVICE 'Factory' to share data between controller and views
app.factory("dataAccess", function($http){   //dataAccess is the name of the Factory and $http is a directive that is being injecting for get Json.
   return{    //Factory return an object
       apiData : function (){  //Inside the object, declare a function to return the call to Json file, data will come back in a 'Promise'...
          return $http.get('https://cdn.contentful.com/spaces/pvdxttzvgb3d/entries?access_token=24069431a8de8798be8e2e778db2ab42ed42942b6dfca4bc3e5523bee336d1c7').then(function(response){  //response is a variable that will hold the promise, it has a value 'data'.
              return response.data; //return response.data if the call to Json file is success.

          });
        }
    };

});



//DECLARING 'homeCtrl' TO CONTROL views/project.htm,Injecting $scope, dataAccess (The service Factory) and $q for Deferred implementations
app.controller('homeCtrl', function($scope, dataAccess, $q){
    //$q.all access ALL the promise date coming from the factory ([dataAccess]).
    $q.all([dataAccess]).then(function(){ //If it is success accessing the data promise then it call a function with parameter 'info' to inject the data and assign it to $scope.projects to be use in the project.
        dataAccess.apiData().then(function(info){
            $scope.projects = info.items; // Assigning the data to $scope.projects.
            $scope.image = info.includes; //Assigning to $scope.image

            // console.log(info.includes.Asset[id].fields.file.url);

            return info.items;
        });
    });

});


app.controller('projectCtrl', function($routeParams, $scope, dataAccess, $q){
    var id = $routeParams.id - 1; //Asign $routeParams content that is = project id - 1.
    // perform some asynchronous operation, resolve or reject the promise when appropriate.
    $q.all([dataAccess]).then(function(){
        dataAccess.apiData().then(function(info){
            $scope.project = info.items[id]; //info[id] is bringing the data from the single project that has been click it on.
            $scope.project.image = info.includes.Asset[id].fields.file.url;
            $scope.project.title = info.items[id].fields.title;
            $scope.project.description = info.items[id].fields.description;
            $scope.project.technologies = info.items[id].fields.technologies;
            $scope.project.url = info.items[id].fields.url;

        });
    });
});










