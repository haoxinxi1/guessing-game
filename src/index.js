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
    this.lastGuess = Math.floor((this.low + this.high) / 2);
    return this.lastGuess;
  }

  lower() {
    this.high = this.lastGuess;
    return this.guess();
  }

  greater() {
    this.low = this.lastGuess;
    return this.guess();
  }
}

module.exports = GuessingGame;
