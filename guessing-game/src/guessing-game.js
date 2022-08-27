class GuessingGame {
  constructor() {
    this.right = null;
    this.left = null;
    this.mid = null;
  }

  setRange(min, max) {
    this.left = min;
    this.right = max;
  }

  guess() {
    return this.mid = Math.round((this.right + this.left) / 2);
  }

  lower() {
    this.right = this.mid;
  }

  greater() {
    this.left = this.mid;
  }
}

module.exports = GuessingGame;
