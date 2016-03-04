angular.module('mainCtrl', [])
  .controller('mainController', ['$scope', function($scope) {
  
    $scope.turn = 'x';

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

    $scope.clickSpace = function($event, row, column) {
      //Change class to x or o
      //update virtual board
      //Check for win scenario
      //Check if board is filled, if so then go to tie
      if($scope.virtualBoard[row][column] === 0) {
        if($scope.turn === 'x') {
          $scope.virtualBoard[row][column] = -1;
        } else {
          $scope.virtualBoard[row][column] = 1;
        }
        var space = $event.currentTarget;
        console.log('click space logic reached');
      }
    };

    $scope.determineSpaces(3);
    console.log($scope.spaces);
    console.log($scope.virtualBoard);

  }]);
