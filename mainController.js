angular.module('mainCtrl', [])
  .controller('mainController', ['$scope', function($scope) {
  
    $scope.turn = 'x';

    //An array of objects. Each object pertains to a space 
    //on the board, containing the row and column property
    $scope.spaces = [];

    //An array to keep track of marked spaces.
    //0 for unmarked, -1 for X's, and 1 for O's
    $scope.virtualBoard = [];

    $scope.turns = 0;

    $scope.boardSize = 3;

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

    $scope.checkWin = function(row, column) {
      console.log('checkWin called');
    };

    $scope.winScenario = function() {

    };

    $scope.tieScenario = function() {

    };

    $scope.clickSpace = function($event, row, column) {
      //Change class to x or o
      //update virtual board
      //Check for win scenario
      //Check if board is filled, if so then go to tie
      if($scope.virtualBoard[row][column] === 0) {
        $scope.turns++;
        
        var space = $event.currentTarget;
        
        if($scope.turn === 'x') {
          $scope.virtualBoard[row][column] = -1;
          $(space).addClass('x');
          $scope.turn = 'o';
        } else {
          $scope.virtualBoard[row][column] = 1;
          $(space).addClass('o');
          $scope.turn = 'x';
        }

        //Check if a win is possible
        if($scope.turns >= 5) {
          //Check if a win occured
          if($scope.checkWin(row, column)) {
            $scope.winScenario();
            //Check if 
          } else if($scope.turns === $scope.boardSize * $scope.boardSize) {
            $scope.tieScenario();
          }
        }

        console.log('click space logic reached');
      }
    };

    $scope.determineSpaces($scope.boardSize);
    console.log($scope.spaces);
    console.log($scope.virtualBoard);

  }]);
