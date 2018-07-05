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










});
