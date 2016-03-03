angular.module('mainCtrl', [])
  .controller('mainController', ['$scope', function($scope) {
  
    //An array of objects. Each object pertains to a space 
    //on the board, containing the row and column property
    $scope.spaces = [];

    //An array to keep track of marked spaces.
    //0 for unmarked, -1 for X's, and 1 for O's
    $scope.virtualBoard = [];

    //Populate spaces for both the spaces array and virtualBoard array
    $scope.determineSpaces = function(n) {
      for(var row = 0; row < n; row++) {
        var currentRow = [];
        for(var column = 0; column < n; column++) {
          $scope.spaces.push({
            row: row,
            column: column
          });
          currentRow.push(0);
        }
        $scope.virtualBoard.push(currentRow);
      }
    };

    $scope.newGame = function() {
      //TODO
    };

    $scope.clickSpace = function($event) {
      console.log($event.currentTarget);
    };

    $scope.determineSpaces(3);
    console.log($scope.spaces);
    console.log($scope.virtualBoard);

  }]);
