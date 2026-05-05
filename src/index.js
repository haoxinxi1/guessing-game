class GuessingGame {
  constructor() {
    this.high = null;
    this.low = null;
    this.lastGuess = null;
  }

  setRange(min, max) {
    this.high = max;
    this.low = min;
  }

  guess() {
    this.lastGuess = Math.ceil((this.low + this.high) / 2);
    return this.lastGuess;
  }

  lower() {
    this.high = this.lastGuess;
  }

  greater() {
    this.low = this.lastGuess;
  }
}

module.exports = GuessingGame;
