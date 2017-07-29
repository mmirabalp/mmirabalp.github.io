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

//app.factory('dataAccess', function($http){
//    return {
//        projects : $http.get('js/data.json').then(function(response) {
//            return response;
//
//        })
//
//
//
//    };
//});






// app.factory('dataAccess', ['$http', function($http) {
//
//     var urlBase = 'js/data.json';
//     var dataFactory = {
//         datos:  $http.get(urlBase)
//     }
//
//
//         return dataFactory;
//
//
// }]);


////Working Factory
//app.factory("dataAccess", ['$http', "$scope",function($http, $scope){
//
//    var proj = {};
//
//    proj.fetchUserDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
//        return $http.get('js/data.json');
//    };
//
//
//    return proj;
//
//
//
//
//
//}]);





app.factory("dataAccess", function($http){
//    var factObj = {
//
//        infoData: { },
//        getInfo: function(){
//             $http.get("js/data.json").then(function(info){
////                 factObj = info.$$state.value.baseUrl;
//
//
//
//            });
//
//        }


//var deferredObj = new deferred();
//    var info = null;
//    deferredObj.resolve(info);
//
//    return deferredObj.promise;


  return{
      infoData : function (){
          return $http.get('js/data.json').then(function(response){
              return response.data;
          });
      }
  };

});



app.controller('homeCtrl', function($scope, dataAccess, $q){

    $q.all([dataAccess]).then(function(data){
//        console.log(data[0]);
    });

    dataAccess.infoData().then(function(info){
        $scope.projects = info;
        console.log($scope.projects[0].title);
    });





//        dataAccess.infoData().then(function(dataAccess){
//            $scope.projects = dataAccess;
//
//        return $scope.projects;
//
//            console.log($scope.projects);
//
//    });
//    console.log(dataAccess.infoData());


});


app.controller('projectCtrl', function($scope, dataAccess){

    dataAccess.infoData().then(function(dataAccess){
        $scope.projects = dataAccess;
        return $scope.projects;

        console.log();

    });
//    console.log(dataAccess);




//    dataAccess.infoData().then(function(data){
//        $scope.projects = data;
//
//    });

});






// Json data projects connection
//app.controller('homeCtrl', function($scope, $http, dataAccess)
//{
////    console.log(dataAccess.$$state);
////
////    console.log(dataAccess.projects);
////
////    console.log(dataAccess);
//
//
//
//
////    $http.get('js/data.json').then(function (response) {
////        $scope.projects = response.data;
//
//
//
//    dataAccess.getUser().then(function(user){
//        dataAccess.user = user;
//        console.log(dataAccess);
//    });
//
////
//    console.log(dataAccess.projects.$$state.status);
////    });
//
//
//
//});





//// Json data projects connection
//app.controller('projectCtrl', function($scope, $routeParams, dataAccess) {
//
//    // console.log($routeParams);
//    // console.log($scope.projects);
//
//
//
//    // dataAccess.fetchUserDetails().then(function(response){ /*This is an example of how you can process and return the required result (Notice here we use '.then')*/
//    //     $scope.project = response.data;
//        // console.log(response.data[0].title);
//        // console.log($scope.projects[0].title);
//        // console.log($scope.project);
//        // console.log($routeParams);
//    // });
//
//
//});

