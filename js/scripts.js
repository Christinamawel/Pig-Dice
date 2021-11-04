// Utility logic
function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

// Business logic
function Player() {
  this.turnTotal = 0;
  this.scoreTotal = 0;
  this.currentRoll = 0;
}

Player.prototype.roll = function() {
  let roll = diceRoll();
  this.currentRoll = roll;
  if (roll != 1) {
    this.turnTotal += roll;
  } else {
    this.turnTotal = 0;
  }
};

Player.prototype.hold = function() {
  this.scoreTotal += this.turnTotal;
  this.turnTotal = 0;
};

function winCheck(playerOne, playerTwo) {
  let playerOneScore = playerOne.turnTotal + playerOne.scoreTotal;
  let playerTwoScore = playerTwo.turnTotal + playerTwo.scoreTotal;

  if (playerOneScore >= 100) {
    return "Player one wins!";
  } else if (playerTwoScore >= 100) {
    return "Player two wins!";
  } else {
    return false;
  }
}

// UI logic
$(document).ready(function() {
  let playerOne = new Player();
  let playerTwo = new Player();
  let turn = 1;

  const checkForWin = function() {
    if (winCheck(playerOne, playerTwo) === "Player one wins!") {
      $("#confetti").css("background", "url('/img/confetti.jpg')");
      $("#player-win-div").show();
      $("#win-message").text("Player One Wins!!!");
    } else if (winCheck(playerOne, playerTwo) === "Player two wins!") {
      $("#confetti").css("background", "url('/img/confetti.jpg')");
      $("#player-win-div").show();
      $("#win-message").text("Player Two Wins!!!");
    }
  }

  const displayRoll = function(player) {
    $(".die").hide();
    switch (player.currentRoll) {
      case (1):
        $("#die-one").fadeIn();
        break;
      case (2):
        $("#die-two").fadeIn();
        break;
      case (3):
        $("#die-three").fadeIn();
        break;
      case (4):
        $("#die-four").fadeIn();
        break;
      case (5):
        $("#die-five").fadeIn();
        break;
      case (6):
        $("#die-six").fadeIn();
        break;
    }
  }

  function turnRoll(player) {
    player.roll();
    displayRoll(player);
    checkForWin()
  }
  
  $("#roll-one").click(function(event) {
    turnRoll(playerOne)
    if (playerOne.turnTotal === 0) {
      turn = 2;
      $("#player-two-turn").fadeIn();
      $("#player-one-turn").hide();
      $("#turn-total").hide();
    } else {
      $("#turn-total").show();
      $("#current-hold").text(playerOne.turnTotal.toString());
    }
  });

  $("#hold-one").click(function(event) {
    turn = 2;
    playerOne.hold()
    $("#one-total").text(playerOne.scoreTotal.toString());
    $("#player-two-turn").fadeIn();
      $("#player-one-turn").hide();
      $("#turn-total").hide();
  });
  
  $("#roll-two").click(function(event) {
    turnRoll(playerTwo);
    if (playerTwo.turnTotal === 0) {
      turn = 1;
      $("#player-one-turn").fadeIn();
      $("#player-two-turn").hide();
      $("#turn-total").hide();
    } else {
      $("#turn-total").show();
      $("#current-hold").text(playerTwo.turnTotal.toString());
    }
  });

  $("#hold-two").click(function(event) {
    turn = 1;
    playerTwo.hold()
    $("#two-total").text(playerTwo.scoreTotal.toString());
    $("#player-one-turn").fadeIn();
      $("#player-two-turn").hide();
      $("#turn-total").hide();
  });

  $("#play-again-btn").click(function(){
    location.reload();
  })
  
})