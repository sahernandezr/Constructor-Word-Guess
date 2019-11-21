//Word Constructor

var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letterArray = [];
    this.makeWord = function () {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === " ") {
                this.letterArray.push(" ");
            }
            else {
                var newLetter = new Letter(this.word[i]);
                this.letterArray.push(newLetter);
            }
        }
    }

    this.show = function () {
        var wordString = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            wordString += this.letterArray[i] + " ";
        }
        console.log(wordString + "\n----------\n");
    };

    this.checkGuess = function (choice) {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].guess(choice);
        }
    }

}

module.exports = Word;

//var palabra = new Word("palabra");
//palabra.makeWordLetters();
//console.log(palabra.letterArray);

