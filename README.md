# _Pig Dice_

#### By _**Christy Welch, Katie Pundt, and Kim Brannian**_

#### _A simple two-player dice game._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git_
* _GitHub repositories_

## Description

_A simple two-player dice game. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1._

## Rules of the Game
_Each player rolls a die until they either roll a 1 or decide to "hold". The first player to score at least 100 points wins._
* _If the player rolls a 1, they score nothing and it becomes the next player's turn._
* _If the player rolls any other number, it is added to their turn total and the player's turn continues._
* _If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn._

## Test

  *_Describe: diceRoll()
    Test: It will return a random whole number between 1 - 6
    Code: diceRoll()
    Expected Output: 1 or 2 or 3 or 4 or 5 or 6

  *_Describe: Player()
    Test: It will create Player {}
    Code: Player()
    Expected Output: {turnTotal: 0, scoreTotal: 0}

    Test: It will use diceRoll() roll and add it to turnTotal
    Code: player.roll(5)
    Expected Output: {turnTotal: 5, scoreTotal: 0}

    Test: It will take turnTotal and add it to scoreTotal and put turnTotal to 0
    Code: player.hold()
    Expected Output: {turnTotal:0, scoreTotal: 5}

    Test: It will make turnTotal to 0 if it receives 1
    Code: player.roll(1)
    Expected Output: {turnTotal: 0, scoreTotal: 5}    

    Describe: winCheck(playerOne, PlayerTwo) 
    Test: It will determine whether either player has turnTotal + scoreTotal:>= 100
    Code: winCheck(playerOne, playerTwo)
    Expected Output: playerOne, playerTwo, or false

  *_Describe: Player



## Setup/Installation Requirements

* _Navigate to https://github.com/Christinamawel/pig-dice_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/Christinamawel/pig-dice.git"_
* _After cloning the project, navigate into it using the command "cd pig-dice"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

* _No known bugs_

## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Christy Welch, Katie Pundt, and Kim Brannian_