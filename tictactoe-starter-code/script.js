$(document).ready(function() {

console.log("hello");



  var player = true;

  $("td").click(function() {

    if (player == true){
      $(this).addClass("X").html("X");
      player = false;
    } else if (player == false) {
      $(this).addClass("O").html("O");
      player = true;
    }
  });


  function winCombi() {
    // rows
    var combi1 = ['0', '1', '2'];
    var combi2 = ['3', '4', '5'];
    var combi3 = ['6', '7', '8'];
    // columns
    var combi4 = ['0', '3', '6'];
    var combi5 = ['1', '4', '7'];
    var combi6 = ['2', '5', '8'];
    // diagonal
    var combi7 = ['0', '4', '8'];
    var combi8 = ['2', '4', '6'];

    return -1;
  }

  function WinnerCheck {
        for (var i = 0; i < winCombi.length; i++) {
            if ((winCombi[i]) === winCombi[i]) {
                return true;
            }
        }
        return false;
    }

  Winner();


  /////////// JOES ANSWERS

//   // Two players can enter X's and O's, if either player gets three of their symbol in a row, they win. If the grid is filled and neither player has three in a row, it's a tie. If you click the reset board button, it should clear the board and restart the game.
//
// $(function(){
//
//   var playerTurn = 1;
//   var $grid = $("td");
//   // If it's X's turn, they should be able to click an empty tile and fill it in with an X
//     // Add an event listener to all of the tiles so that when you click on them, IF they're empty, it will make the innerHTML be an X
//
//   $grid.click(addXOrO);
//
//   function addXOrO() {
//     if(playerTurn == 1 && $(this).html() == "" ) {
//       $(this).html("X");
//       // Have a variable that defines whose turn it is. After this action is complete, change it to be O's turn
//       playerTurn = 2;
//       // Call a function to check if anyone has won
//       checkForWinner($(this).html());
//     } else if (playerTurn == 2 && $(this).html() == "") {
//       $(this).html("O");
//       playerTurn = 1;
//       checkForWinner($(this).html());
//     }
//   }
//
//   // If there are three X's or O's in a row, that player should win
//     // Define a function that checks which tiles have the class of X or O and if any of them meet the winning combinations: 0,1,2 _ 3,4,5 _ 6,7,8 _ 0,3,6 _ 1,4,7 _ 2,5,8 _ 0,4,8 _ 2,4,6
//     // If either player wins, have an alert announce that they've won
//   function checkForWinner(symbol) {
//     // X WINS
//     if($($grid[0]).html() == symbol && $($grid[1]).html() == symbol && $($grid[2]).html() == symbol) {
//       alert(symbol + " has won!");
//     } else if($($grid[3]).html() == symbol && $($grid[4]).html() == symbol && $($grid[5]).html() == symbol) {
//         alert(symbol + " has won!");
//     } else if($($grid[6]).html() == symbol && $($grid[7]).html() == symbol && $($grid[8]).html() == symbol) {
//         alert(symbol + " has won!");
//     } else if($($grid[0]).html() == symbol && $($grid[3]).html() == symbol && $($grid[6]).html() == symbol) {
//         alert(symbol + " has won!");
//     } else if($($grid[1]).html() == symbol && $($grid[4]).html() == symbol && $($grid[7]).html() == symbol) {
//         alert(symbol + " has won!");
//     } else if($($grid[2]).html() == symbol && $($grid[5]).html() == symbol && $($grid[8]).html() == symbol) {
//         alert(symbol + " has won!");
//     } else if($($grid[0]).html() == symbol && $($grid[4]).html() == symbol && $($grid[8]).html() == symbol) {
//         alert(symbol + " has won!");
//     } else if($($grid[2]).html() == symbol && $($grid[4]).html() == symbol && $($grid[6]).html() == symbol) {
//         alert(symbol + " has won!");
//     }
//   }
//
//
//
//   // If it's O's turn, they should be able to click an empty tile and fill it in with an O
//     // Add an event listener to all of the tiles so that when you click on them, IF they're empty, it will make the innerHTML be an O
//     // After this action is complete, have the turn variable change to be O's turn
//     // Call a function to check if O has won
//
//
//   // If you click the reset board button, it should clear the board and restart the game
//     // Add an event listener to the reset board button so that when it's clicked, all the tiles html is set to an empty string
//
// });
//










});
