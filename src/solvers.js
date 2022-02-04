/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // input: the length of the board
  // output: n * n matrix --> board.rows();
  var solution = new Board({n: n});
  // iterate thru board
  // if conflict --> continue
  // otherwise --> toggle position
  var length = solution.get('n');
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      solution.togglePiece(i, j);
      // toggle first
      if (solution.hasAnyRowConflicts() || solution.hasAnyColConflicts()) {
        solution.togglePiece(i, j);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
// input: the length of the board
// output: number
  var board = new Board({n: n});
  var solutionCount = 0;
  // create a helper function called placeRook- takes a row argument
  var placeRook = function(row) {
    // inside placeRook
    // base case --> 3 rooks placed on the board
    // row === n
    if(row === n) {
      // increment solution count
      solutionCount++;
      return;
    }
    // for each row --> iterate over each column
    for (var i = 0; i < board.get('n'); i++) {
      // toggle the square at that position
      board.togglePiece(row, i);
      // if there is no conflict at that position
      if (!board.hasAnyRooksConflicts()) {
        // recursively call the function starting at the next row
        placeRook(row + 1)
      }
      // otherwise untoggle that position
      board.togglePiece(row, i);
    }
  }
  // call placeRook starting at 0 row
  placeRook(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
