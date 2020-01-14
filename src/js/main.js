    //DECLARING ANGULAR MODULE AND app Name: 'myApp',
    //Injecting 'ngRoute' dependency module to use for routes in app.
    var app = angular.module("myApp", ["ngRoute"]);
    // var code = angular.module("myCode", ["ngRoute"]);

    //Configuring the route of the application.
    //$routeProvider is a directive inside ngRoute module
    app.config(function($routeProvider) {
        $routeProvider
          .when("/", {
            //(when) is a method inside $routeProvider directive
            templateUrl: "/views/home.htm", //templateUrl contain the browser route as it is there...
            controller: "homeCtrl" //Declaring de controller that is going to control this view: "views/home.htm" when the user go to that route in browser
          })
          .when("/project/:id", {
            //'_______'/:id . is a variable value that  $routeParams is going to get.
            templateUrl: "/views/project.htm",
            controller: "projectCtrl"
          })
          .when("/style", {
            //'_______'/:id . is a variable value that  $routeParams is going to get.
            templateUrl: "views/style.htm"
          })

          .otherwise("/");   //Default route that goes to HOME.

    });





    // FACTORY SECTION TO USE CONTENTFULL CMS
    //DECLARING A SERVICE 'Factory' GET PROJECT DATA FROM CONTENTFULL CMS and share data between controller and views
    app.factory("dataAccess", function($http){   //dataAccess is the name of the Factory and $http is a directive that is being injecting for get Json.
    return{    //Factory return an object
        apiData : function (){  //Inside the object, declare a function to return the call to Json file, data will come back in a 'Promise'...
            return $http.get('https://cdn.contentful.com/spaces/pvdxttzvgb3d/entries?access_token=24069431a8de8798be8e2e778db2ab42ed42942b6dfca4bc3e5523bee336d1c7').then(function(response){  //response is a variable that will hold the promise, it has a value 'data'.
                return response.data; //return response.data if the call to Json file is success.
            });
            }
        };
    });


    // PROJECTS MODULE SECTION
    //DECLARING 'homeCtrl' TO CONTROL views/project.htm,Injecting $scope, dataAccess (The service Factory) and $q for Deferred implementations
    app.controller('homeCtrl', function($scope, dataAccess, $q){
        //$q.all access ALL the promise date coming from the factory ([dataAccess]).
        $q.all([dataAccess]).then(function(){ //If it is success accessing the data promise then it call a function with parameter 'info' to inject the data and assign it to $scope.projects to be use in the project.
            dataAccess.apiData().then(function(info){
                $scope.projects = info.items; // Assigning the data to $scope.projects.
                $scope.image = info.includes; //Assigning to $scope.image

                // function url(){
                //     return image.Asset[$index].fields.file.url;
                // }    
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























 //Configuring the route of the application.
    $routeProvider is a directive inside ngRoute module
    code.config(function($routeProvider) {
        $routeProvider
          .when("/", {
            //'_______'/:id . is a variable value that  $routeParams is going to get.
            templateUrl: "/views/codechallenge.htm",
            controller: "codeCtrl"
          })

        //   .when("/codechallenge/:id", {
        //     //'_______'/:id . is a variable value that  $routeParams is going to get.
        //     templateUrl: "/views/codechallenge.htm",
        //     controller: "codeCtrl"
        //   })

          .otherwise("/");   //Default route that goes to HOME.

    });


        // FACTORY SECTION TO USE CONTENTFULL CMS
    //DECLARING A SERVICE 'Factory' to GET CODE DATA FROM CONTENTFULL CMS and share data between controller and views
    code.factory("codeAccess", function($http){   //dataAccess is the name of the Factory and $http is a directive that is being injecting for get Json.
    return{    //Factory return an object
        apiData : function (){  //Inside the object, declare a function to return the call to Json file, data will come back in a 'Promise'...
            return $http.get('https://cdn.contentful.com/spaces/4tlvg4vrs2ff/entries?access_token=YzJlKvEoD0liw_0aqVg8RNLjnYasOWcwLilxnu2jsHU').then(function(response){  //response is a variable that will hold the promise, it has a value 'data'.
                return response.data; //return response.data if the call to Json file is success.
            });
            }
        };
    });


    code.controller("codeCtrl", function($routeParams, $scope, codeAccess, $q) {
      var id = $routeParams.id - 1; //Asign $routeParams content that is = project id - 1.
      // perform some asynchronous operation, resolve or reject the promise when appropriate.
      $q.all([codeAccess]).then(function() {
        codeAccess.apiData().then(function(info) {
                $scope.code = info.items[0].fields.projectName; //info[id] is bringing the data from the single project that has been click it on.
                // $scope.project.image = info.includes.Asset[id].fields.file.url;
                // $scope.project.title = info.items[id].fields.title;
                // $scope.project.description = info.items[id].fields.description;
                // $scope.project.technologies = info.items[id].fields.technologies;
                // $scope.project.url = info.items[id].fields.url;
          console.log(info.items[0].fields.projectName);
          
        });
      });
    });





//LINKS TO CONTENTFUL CMS - API

// Project Contentfull API Link
//(https://cdn.contentful.com/spaces/pvdxttzvgb3d/entries?access_token=e88ac34324a5256d85ce142fe40ed93cec2aebdf6709ce2bc0c5e84c028a779b)

// Code Challenge Contentfull API Link 
//(https://cdn.contentful.com/spaces/4tlvg4vrs2ff/entries?access_token=YzJlKvEoD0liw_0aqVg8RNLjnYasOWcwLilxnu2jsHU)








