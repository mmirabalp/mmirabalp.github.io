    //DECLARING ANGULAR MODULE AND app Name: 'myApp',
    //Injecting 'ngRoute' dependency module to use for routes in app.
      var app = angular.module("myApp", ["ngRoute"]);
    // var code = angular.module("myCode", ["ngRoute"]);
  
    

    //Configuring the route of the application.
    //$routeProvider is a directive inside ngRoute module
    app.config(function($routeProvider) {
        $routeProvider
    
            .when("/", {
                templateUrl: "/views/home.htm",
                controller: "HomeCtrl"
              })
            .when("/project/:id", {
                ////'_______'/:id . is a variable value that  $routeParams is going to get.
                templateUrl: "/views/project.htm",
                controller: "ProjectCtrl"
              })
            // .when("/codechallenge/:id", {
            //    ////'_______'/:id . is a variable value that  $routeParams is going to get.
            //    templateUrl: "/views/codechallenge.htm",
            //    controller: "CodeCtrl"
            // })
            
            // .when("/style", {
            //   ////'_______'/:id . is a variable value that  $routeParams is going to get.
            //   templateUrl: "views/style.htm"
            // })
          .otherwise("/");   //Default route that goes to HOME.

    });


// *********FACTORYS*************FACTORYS*************FACTORYS************FACTORYS************ FACTORYS 
 // FACTORY TO CALL CONTENTFUL API TO GET {CODES} CHALLENGES   
app.factory("projectsData",["$http",
    function(netProtocol){
      var factoryObject = {
         getData: function(){
            return netProtocol.get("https://cdn.contentful.com/spaces/pvdxttzvgb3d/entries?access_token=24069431a8de8798be8e2e778db2ab42ed42942b6dfca4bc3e5523bee336d1c7").then(function(response){
                factoryObject.data = response.data;
            });
        }    
    };
    factoryObject.getData();
    return factoryObject;
  }
]);

// FACTORY TO CALL CONTENTFUL API TO GET {CODES} CHALLENGES
app.factory("codesData",["$http",
    function(netProtocol){
      var factoryObject = {
         getData: function(){
            return netProtocol.get("https://cdn.contentful.com/spaces/4tlvg4vrs2ff/entries?access_token=YzJlKvEoD0liw_0aqVg8RNLjnYasOWcwLilxnu2jsHU").then(function(response){
                factoryObject.data = response.data;
            });
        }    
    };
    factoryObject.getData();
    return factoryObject;
  }
]);
// *********FACTORYS*************FACTORYS*************FACTORYS************FACTORYS************ FACTORYS 




// *********CONTROLLER*************CONTROLLER*************CONTROLLER************CONTROLLER************ CONTROLLER

// HOME CONTROLLER TO CONTROLE HOME PAGE AND CONNECT TO API CALL
app.controller("HomeCtrl",["$scope","projectsData", "codesData",
    function(scope, projectData, codesData){
        scope.projects = projectData;
        scope.codes = codesData;
        console.log(codesData);
        }
    ]
);
// HOME CONTROLLER TO CONTROLE HOME PAGE AND CONNECT TO API CALL



// PROJECT CONTROLLER TO CONTROLE HOME PAGE AND CONNECT TO API CALL
app.controller("ProjectCtrl",["$routeParams", "$scope","projectsData", "$q",
    function(routeParams,scope,projectsData,$q){
    var id = routeParams.id - 1;
        scope.projects = projectsData;
            $q.all([projectsData]).then(function(){
              projectsData.getData().then(function(){
                console.log(projectsData.data.items[id]); 
                    scope.project = projectsData.data.items[id]; //info[id] is bringing the data from the single project that has been click it on.
                    // scope.project.image = info.includes.Asset[id].fields.file.url;
                    scope.project.title = projectsData.data.items[id].fields.title;
                    scope.project.description = projectsData.data.items[id].fields.description;
                    scope.project.technologies = projectsData.data.items[id].fields.technologies;
                    scope.project.url = projectsData.data.items[id].fields.url;                    
              });        
            });        
        }    
    ]
);
// PROJECT CONTROLLER TO CONTROLE HOME PAGE AND CONNECT TO API CALL


// CODES CONTROLLER TO CONTROLE CODE CHALLENGE PAGE AND CONNECT TO API CALL
app.controller("CodeCtrl",["$routeParams", "$scope","codesData", "$q",
    function(routeParams,scope,codesData,$q){
    var id = routeParams.id - 1;
        scope.codes = codesData;
            $q.all([codesData]).then(function(){
              codesData.getData().then(function(){
                console.log(codesData.data.items[id]); 
                    scope.code = codesData.data.items[id]; //info[id] is bringing the data from the single code that has been click it on.
                    // scope.code.image = info.includes.Asset[id].fields.file.url;
                    scope.code.title = codesData.data.items[id].fields.title;
                    scope.code.description = codesData.data.items[id].fields.description;
                    scope.code.technologies = codesData.data.items[id].fields.technologies;
                    scope.code.url = codesData.data.items[id].fields.url;   
                    scope.code.text = codesData.data.items[id].fields.codeText
                    // $scope.code.technology = codesData.data.items[id].fields.technology;
                    // $scope.code.technology.color = codesData.data.items[id].fields.color;
                    
              });        
            });        
        }    
    ]
);
// PROJECT CONTROLLER TO CONTROLE HOME PAGE AND CONNECT TO API CALL







// *********CONTROLLER*************CONTROLLER*************CONTROLLER************CONTROLLER************ CONTROLLER  





//LINKS TO CONTENTFUL CMS - AP

//TeamTreehouse API my account Link
//(https://teamtreehouse.com/mawel.json)

// Project Contentfull API Link
//(https://cdn.contentful.com/spaces/pvdxttzvgb3d/entries?access_token=e88ac34324a5256d85ce142fe40ed93cec2aebdf6709ce2bc0c5e84c028a779b)

// Code Challenge Contentfull API Link 
//(https://cdn.contentful.com/spaces/4tlvg4vrs2ff/entries?access_token=YzJlKvEoD0liw_0aqVg8RNLjnYasOWcwLilxnu2jsHU)