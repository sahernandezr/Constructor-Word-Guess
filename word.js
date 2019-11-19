//Word Constructor

var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letterArray = [];

    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            this.letterArray.push(" ");
        }
        else {
            var newLetter = new Letter(this.word[i]);
            this.letterArray.push(newLetter);
        }
    }

    this.toString = function () {
        var wordString = "";

        this.letterArray.forEach(function (value) {
            if (value === " ") {
                wordString += " ";
            }
            else {
                wordString += value.showLetter();
            }
        })

        return wordString;

    }

    this.checkGuess = function (value) {
        this.lettersArray.forEach(function (value) {
            if (element.letter !== undefined) {
                element.checkGuess(letterGuess);
            }
        })
    }

}

module.exports = Word;

//var palabra = new Word("palabra");
//palabra.makeWordLetters();
//console.log(palabra.letterArray);

