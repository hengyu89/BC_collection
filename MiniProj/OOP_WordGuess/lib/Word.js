const Letter = require("./Letter");

class Word {
    constructor(word) {
        this.letters = word.split("").map(char => new Letter(char));
    }

    guessLetter(char) {
        let foundLetter = false;
        this.letters.forEach(letter => {
            if (letter.guess(char)) {
                foundLetter = true;
            }
        });
        return foundLetter;
    }

    guessedCorrectly() {
        let foundCorrect = true;
        this.letters.forEach(letter => {
            if (!letter.visible) {
                foundCorrect = false;
            }
        });
        return foundCorrect;
        // Better Solution:
        // return this.letters.every(letter => letter.visible);
    }

    toString() {
        return this.letters.join(" ");
    }

    getSolution() {
        return this.letters
            .map(letter => letter.getSolution())
            .join("");
    }
}

module.exports = Word;
