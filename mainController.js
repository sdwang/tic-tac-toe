angular.module('mainCtrl', [])
  .controller('mainController', ['$scope', function($scope) {
  
    $scope.spaces = [

    ];

    $scope.determineSpaces = function(n) {
      for(var row = 0; row < n; row++) {
        for(var column = 0; column < n; column++) {
          $scope.spaces.push({
            row: row,
            column: column
          });
        }
      }
    };

    $scope.newGame = function() {
      //TODO
    };

    $scope.determineSpaces(3);
    console.log($scope.spaces);

  }]);
