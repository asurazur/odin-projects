class Coordinate {
  #x;
  #y;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  equals(coordinate) {
    return this.#x === coordinate.getX() && this.#y === coordinate.getY();
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  setX(x) {
    this.#x = x;
  }

  setY(y) {
    this.#y = y;
  }

  setCoordinate(x, y) {
    this.setX(x);
    this.setY(y);
  }

  getCoordinate() {
    return [this.#x, this.#y];
  }
}

export { Coordinate };
