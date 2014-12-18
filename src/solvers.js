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

//hasRowConflictAt: given a row, does it have a conflict with another Queen
//hasAnyRowConflicts: checks every row in board for a conflict
//hasColConflictAt: given a column, does it have a conflict with another Queen
//hasAnyColConflicts: checks every column in board for a conflict
//hasMajorDiagonalConflictAt:
//hasAnyMajorDiagonalConflicts: function() {
//hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
//hasAnyMinorDiagonalConflicts: function() {
window.findNRooksSolution = function(n) {
  //create new instance of board, with size n
  var board = new Board({n:5});
  //create variable called result, var result = [];
  var result = [];
  var count = 0;

  //create innerFunction that will recursively call on each row
  var innerFunc = function(row) {
    //base case: once result.length === n, return;
    if (result.length === n) {
      return;
    }
    //create a loop that iterates through each row
    for (var i = 0; i < n; i++) {
      //create an inner loop that iterates over each chess space
      for (var j = 0; j < n; j++) {

      }
    }
  }


      //call innerFunction, pass in
  //return 1 passing 2D solution array, return result;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
