/**
 * Represents a ship in the game
 */
class Ship {
  #hits;
  #length;

  constructor(length) {
    if (length < 1 || !Number.isInteger(length))
      throw new Error("Ship's Length Must be Positive Integer");
    this.#length = length;
    this.#hits = 0;
  }

  hit() {
    if (this.#length > this.#hits) {
      this.#hits++;
    }
  }

  isSunk() {
    return this.#hits === this.#length;
  }

  getLength() {
    return this.#length;
  }
}

export { Ship };
