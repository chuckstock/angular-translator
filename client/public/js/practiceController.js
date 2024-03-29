angular.module("myApp").controller("PracticeController", ["$scope", "$http", "$routeParams",
function($scope, $http, $routeParams) {
  var id = $routeParams.userID;

  //post request to translate word based on given variables
  $scope.translate = function() {
     $http.post("/api/v1/practice/" + id, $scope.newWord)
     .success(function(data) {
       $scope.word = data;
     });
  };

  //get request to grab all users in the database
  $scope.getUser = function() {
    $http.get('/api/v1/user/' + id)
    .success(function(data) {
      $scope.user = data;
    });
  };

  $scope.getUser();
}]);
