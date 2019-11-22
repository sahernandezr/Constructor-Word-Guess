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

    this.showWord = function (letter) {
	var rightAnswer= false;
        for (var i = 0; i < this.letterArray.length; i++) {
		if (this.letterArray[i].showLetter(letter)) {
		rightAnswer= true;
}
            
        }
        console.log("\n----------\n");
    };

    this.checkWord = function (choice) {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkLetter(choice);
        }
    }

}

module.exports = Word;

//var palabra = new Word("palabra");
//palabra.makeWordLetters();
//console.log(palabra.letterArray);

