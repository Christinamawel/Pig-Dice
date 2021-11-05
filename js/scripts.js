// Utility logic
function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

// Business logic
function Player() {
  this.turnTotal = 0;
  this.scoreTotal = 0;
  this.currentDiceRollOne = 0;
  this.currentDiceRollTwo = 0;
}

Player.prototype.roll = function() {
  let roll = diceRoll();
  this.currentDiceRollOne = roll;
  if (roll != 1) {
    this.turnTotal += roll;
  } else {
    this.turnTotal = 0;
  }
};

Player.prototype.twoDice = function() {
  let die1 = diceRoll();
  let die2 = diceRoll();
  this.currentDiceRollOne = die1;
  this.currentDiceRollTwo = die2;
  if (die1 != 1 && die2 != 1) {
    this.turnTotal += (die1 + die2);
  } else if (die1 === 1 && die2 === 1) {
    this.turnTotal = 0;
    this.scoreTotal = 0;
  } else {
    this.turnTotal = 0;
  }

  if (die1 === die2 && die1 != 1) {
    return "Doubles!";
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
  let gameMode = 0;

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
    switch (player.currentDiceRollOne) {
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
    
    if (player.currentDiceRollTwo) {
      switch (player.currentDiceRollTwo) {
        case (1):
          $("#die-two-one").fadeIn();
          break;
        case (2):
          $("#die-two-two").fadeIn();
          break;
        case (3):
          $("#die-two-three").fadeIn();
          break;
        case (4):
          $("#die-two-four").fadeIn();
          break;
        case (5):
          $("#die-two-five").fadeIn();
          break;
        case (6):
          $("#die-two-six").fadeIn();
          break;
      }
    }
  }

  function turnRoll(player) {
    player.roll();
    displayRoll(player);
    checkForWin()
    if (player.turnTotal === 0) {
      $("#player-one-turn").toggle();
      $("#player-two-turn").toggle();
      $("#turn-total").hide();
    } else {
      $("#turn-total").show();
      $("#current-hold").text(player.turnTotal.toString());
    }
  }

  function hold(player) {
    player.hold()
    $("#player-two-turn").toggle();
    $("#player-one-turn").toggle();
    $("#turn-total").hide();
  }

  function rollTwo(player) {
    const twoDiceRoll = player.twoDice();
    $(".hold").show();
    displayRoll(player);
    checkForWin()
    if (player.turnTotal === 0) {
      $("#player-one-turn").toggle();
      $("#player-two-turn").toggle();
      $("#turn-total").hide();
    } else if(twoDiceRoll) {
      $(".hold").hide();
      $("#turn-total").show();
      $("#current-hold").text(player.turnTotal.toString());
    } else {
      $("#turn-total").show();
      $("#current-hold").text(player.turnTotal.toString());
    }
  }

  function reset() {
    playerOne.turnTotal = 0;
    playerOne.scoreTotal = 0;
    playerTwo.turnTotal = 0;
    playerTwo.scoreTotal = 0;
    $("#game").show();
    $("#one-total").text(playerOne.scoreTotal.toString());
    $("#two-total").text(playerTwo.scoreTotal.toString());
    $(".die").hide();
  }

  $("#one-dice").click(function(event) {
    reset();
    gameMode = 1;
    $("#rulesTwoDice").hide();
    $("#rulesOneDice").show();
  });

  $("#two-dice").click(function(event) {
    reset();
    gameMode = 2;
    $("#rulesOneDice").hide();
    $("#rulesTwoDice").show();
  });
  
  $("#roll-one").click(function(event) {
    if (gameMode === 1) {
      turnRoll(playerOne);
    } else {
      rollTwo(playerOne);
    }
  });

  $("#roll-two").click(function(event) {
    if (gameMode === 1) {
      turnRoll(playerTwo);
    } else {
      rollTwo(playerTwo);
    }
  });

  $("#hold-one").click(function(event) {
    hold(playerOne)
    $("#one-total").text(playerOne.scoreTotal.toString());
  });

  $("#hold-two").click(function(event) {
    hold(playerTwo)
    $("#two-total").text(playerTwo.scoreTotal.toString());
  });

  $("#play-again-btn").click(function(){
    location.reload();
  });
});