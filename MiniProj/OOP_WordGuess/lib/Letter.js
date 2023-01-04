class Letter {
    constructor(char) {
        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
    }

    guess(charGuess) {
        if(charGuess.toUpperCase() === this.char.toUpperCase()) {
            this.visible = true;
            return true;
        }
        return false;
    }

    toString() {
        if(this.visible == true) {
            return this.char;
        } else {
            return "_";
        }
    }

    getSolution() {
        return this.char;
    }
}

module.exports = Letter;
