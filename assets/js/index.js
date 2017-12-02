angular.module('app', [])
.controller('mainController', function($scope) {
  $scope.showDetail = false;

  // define Data
  $scope.sample = {};

  $scope.sample.bio = {
    title: "About",
    description: "blah blah blah"
  };

  $scope.sample.module_01 = {
    header: "module_01",
    subheader: "a script link?",
    title: "Added Module_01",
    description: "description",
    foundlist: ["Reddit Title One", "Reddit Title Two"]
  };

  $scope.sample.module_02 = {
    header: "module_02",
    subheader: "a script link?",
    title: "Added Module_02",
    description: "description",
    foundlist: ["FB Title One", "FB Title Two"]
  };

  //Button Functions
  $scope.select = function(key) {
    $scope.current = $scope.sample[key];
    $scope.current.mykey = key;
    $scope.showDetail = true;
  }

  $scope.next = function(direction) {
    var keys = Object.keys($scope.sample),
        idIndex = keys.indexOf($scope.current.mykey),
        nextIndex = idIndex + direction;
    if(nextIndex < 0){ nextIndex = keys.length-1; }
    if(nextIndex >= keys.length){ nextIndex = 0; }
    if($scope.sample[keys[nextIndex]].header){
      $scope.select(keys[nextIndex]);
    }else{
      $scope.current = $scope.sample[keys[nextIndex]];
      $scope.current.mykey = keys[nextIndex];
      $scope.next(direction);
    }
  };

  $scope.overview = function() {
    $scope.showDetail = false;
  }

});
