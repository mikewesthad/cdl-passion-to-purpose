import seedrandom from "seedrandom";

class Random {
  constructor(seedValue) {
    this.setSeed(seedValue);
  }

  setSeed(seedValue) {
    this.rng = seedrandom(seedValue);
  }

  number(min, max) {
    return this.rng() * (max - min) + min;
  }

  int(min, max) {
    return Math.floor(this.rng() * (max - min + 1) + min);
  }
}

export default Random;
