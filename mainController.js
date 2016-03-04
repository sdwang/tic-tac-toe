angular.module('mainCtrl', [])
  .controller('mainController', ['$scope', function($scope) {
  
    //Current player's turn
    $scope.turn = 'x';

    //An array of objects. Each object pertains to a space 
    //on the board, containing the row and column property
    $scope.spaces = [];

    //An array to keep track of marked spaces.
    //0 for unmarked, -1 for X's, and 1 for O's
    $scope.board = [];

    //Counter to track number of turns
    $scope.turns = 0;

    //n x n board size
    $scope.boardSize = 3;

    //Populate spaces for both the spaces array and board array
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
        $scope.board.push(currentRow);
      }
    };

    $scope.newGame = function() {
      //TODO
    };

    $scope.checkWin = function(row, column) {
      if($scope.board[row][0] === $scope.board[row][1] && $scope.board[row][1] === $scope.board[row][2]) {
        return true;
      } else if($scope.board[0][column] === $scope.board[1][column] && $scope.board[1][column] === $scope.board[2][column]) {
        return true;
      } else if($scope.board[0][0] === $scope.board[1][1] && $scope.board[1][1] === $scope.board[2][2]) {
        return true;
      } else if($scope.board[0][2] === $scope.board[1][1] && $scope.board[1][1] === $scope.board[2][0]) {
        return true;
      }

      return false;
    };

    $scope.winScenario = function() {
      if($scope.turn === 'x') {
        console.log('o wins')
        console.log($('end-game-message'))
        $('.end-game-message').text('Noughts win!');
      } else {
        console.log('x wins');
        console.log($('end-game-message'))
        $('.end-game-message').text('Crosses win!');
      }
      $scope.clickSpace = null;
      console.log($scope.board);
    };

    $scope.tieScenario = function() {
      $('.end-game-message').text('Tie!');
    };

    $scope.clickSpace = function($event, row, column) {
      if($scope.board[row][column] === 0) {
        $scope.turns++;
        
        var space = $event.currentTarget;
        
        if($scope.turn === 'x') {
          $scope.board[row][column] = -1;
          $(space).addClass('x');
          $scope.turn = 'o';
        } else {
          $scope.board[row][column] = 1;
          $(space).addClass('o');
          $scope.turn = 'x';
        }

        //Check if a win is possible
        if($scope.turns >= 5) {
          //Check if a win occured
          if($scope.checkWin(row, column)) {
            $scope.winScenario();
            //Check if no more turns to be made
          } else if($scope.turns === $scope.boardSize * $scope.boardSize) {
            $scope.tieScenario();
          }
        }
      }
    };

    $scope.determineSpaces($scope.boardSize);

  }]);
