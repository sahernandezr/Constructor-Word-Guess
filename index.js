var Word = require("./Word.js");
var inquirer = require("inquirer");

var listOfWords = ["STING", "MICHAEL JACKSON", "SIA", "BRITNEY SPEARS"];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var triesLeft = 10;

function startGame() {

    var randomNumber = Math.floor(Math.random() * listOfWords.length);
    var chosenWord = listOfWords[randomNumber];
    wordToGuess = new Word(chosenWord);
    wordToGuess.makeWord(); //this makes a new letter object for each of the letters in the word
    console.log(chosenWord);
    playGame();
};

function playGame() {
    //Ask the user to pick a letter
    inquirer
        .prompt([
            {
                type: "input",
                message: "Chose one letter from a to z",
                name: "guess",
            }
        ])
        .then(function (input) {
            console.log(input.guess);
            //Check if the key is not a letter or more than one key, send message asking for only one letter from a to z
            if (!alphabet.includes(input.guess)) {
                console.log("Please choose a letter");
            }
            //if the key is a letter, compare it to the letters in the chosen word
            else {
                //if all the letters have been guessed, you win
        
                //if the guess is included, send a message of "correct" and show the letters on the correct spaces
            
                //if the guess is not included, send an message "incorrect" and lower triesleft by one
        
                //if triesLeft=0, tell the player they lost and run the restartGame function

            };
        })
}


function restartGame() {
    inquirer
        .prompt([
            {
                name: "restartGame",
                type: "list",
                message: "Do you want to play again or quit the game",
                choices: ["Play Again", "Quit"]
            }
        ])
        .then(function (answer) {
            if (answer.restartGame === "Play Again") {
                playGame();
            } else {
                return;
            }
        });

};



playGame();
//startGame();
//restartGame();