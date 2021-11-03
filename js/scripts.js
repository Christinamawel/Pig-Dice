// Utility logic
function diceRoll() {
  return Math.floor(Math.random() * (5) + 1);
}

// Business logic
function Player() {
  this.turnTotal = 0;
  this.scoreTotal = 0;
}

Player.prototype.roll = function() {
  let roll = diceRoll();
  if (roll != 1) {
    this.turnTotal += diceRoll();
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
const playerTwo = new Player();
console.log(playerTwo.roll(), playerTwo);
console.log(playerTwo.roll(), playerTwo);
console.log(playerTwo.roll(), playerTwo);
console.log(playerTwo.hold(), playerTwo);