var Word = require("./Word.js");
var inquirer = require("inquirer");

var listOfWords = ["sting", "michael jackson", "sia", "britney spears"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var triesLeft;

var wordToGuess = "";

function newGame() {
    var randomNumber = Math.floor(Math.random() * listOfWords.length);
    var wordToGuess = listOfWords[randomNumber];
    var newWord = new Word(wordToGuess);
    triesLeft = 6;
    //console.log(newWord);

    var letterWordArray = [];
    var guessesArray = [];

    inquirer.prompt([
        {
            type: "input",
            name: "guessedLetter",
            message: "Choose a letter",
        }
    ]).then(function (answer) {
        if (alphabet.indexOf(answer.guessedLetter) === -1) {
            console.log("Please only chose one letter from a to z");
        }
        else {
            console.log("That is a letter");
        }
    })

};



newGame();
