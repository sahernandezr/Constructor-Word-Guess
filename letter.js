//Letter constructor

function Letter(letter) {
    this.letter = letter;
    this.guessed = false;

    this.toString = function () {
        //for words with spaces
        if (this.letter === " ") {
            this.guessed=true;
            return " ";
        }
        //for letters that haven't been guessed
        else if (!this.guessed) {
            return "_";
        }
        //for letters that are guessed correctly
        else {
            return this.letter;
        }
    };

    this.checkGuess = function (userGuess) {
        //if the letter the user guesses is the correct letter
        if (userGuess === this.letter) {
            this.guessed = true;
        }
    };
}

//var testLetter = new Letter("S");

//testLetter.guessed = true;
//console.log(testLetter.showLetter());

module.exports = Letter;