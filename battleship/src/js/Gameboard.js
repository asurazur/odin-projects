import { Coordinate } from "./Coordinate.js";
import { Ship } from "./Ship.js";

class Gameboard {
  static BOARD_SIZE = 10;
  static MAX_COORDINATE = this.BOARD_SIZE - 1;

  constructor() {
    this.initializeBoard();
  }

  initializeBoard() {
    // 10 x 10 Boolean Array: Ship | null
    this.board = [
      ...new Array(Gameboard.BOARD_SIZE)
        .fill(null)
        .map(() => new Array(Gameboard.BOARD_SIZE).fill(null)),
    ];
    this.misses = new Set();
    this.hits = new Set();
    this.ships = [];
  }

  #isOutofBounds(move) {
    const [x, y] = move.getCoordinate();
    return x > Gameboard.MAX_COORDINATE ||
      y > Gameboard.MAX_COORDINATE ||
      x < 0 ||
      y < 0
      ? true
      : false;
  }

  #checkOverlap(ship, coordinate, orientation) {
    let [row, column] = coordinate.getCoordinate();
    for (let i = 0; i < ship.length; ++i) {
      if (orientation === "horizontal") {
        if (this.board[row][column + i] !== null) {
          return true;
        }
      } else if (orientation === "vertical") {
        if (this.board[row + i][column] !== null) {
          return true;
        }
      }
    }
    return false;
  }

  #populateCoordinates(ship, coordinate, orientation) {
    let [row, column] = coordinate.getCoordinate();
    for (let i = 0; i < ship.length; ++i) {
      if (orientation === "horizontal") {
        this.board[row][column + i] = ship;
      } else if (orientation === "vertical") {
        this.board[row + i][column] = ship;
      }
    }
    return false;
  }

  // recieveAttack(Coordinate): {status: boolean, note: string} -> Determine if a ship is hit or not | already attacked
  recieveAttack(attack) {
    if (this.#isOutofBounds(attack)) {
      return { status: false, note: "outOfBounds" };
    }

    const stringCoordinate = attack.toString();
    if (this.hits.has(stringCoordinate) || this.misses.has(stringCoordinate)) {
      return { status: false, note: "alreadyAttacked" };
    }

    if (this.board[x][y] === null) {
      this.misses.add(stringCoordinate);
      return { status: true, note: "miss" };
    } else {
      this.board[x][y].hit();
      this.hits.add(stringCoordinate);
      return { status: true, note: "ship" };
    }
  }

  placeShip(ship, coordinate, orientation) {
    // Able to Place Ships at Specific Coordinates, No Overlapping or Out of Bounds
    if (orientation !== "horizontal" || orientation !== "vertical")
      return { status: false, note: "invalidOrientation" };

    const [row, column] = coordinate.getCoordinate();
    if (this.#isOutofBounds(coordinate)) {
      return { status: false, note: "outOfBounds" };
    }

    if (
      orientation === "horizontal" &&
      column + ship.length > Gameboard.BOARD_SIZE
    ) {
      return { status: false, note: "outOfBounds" };
    }

    if (
      orientation === "vertical" &&
      row + ship.length > Gameboard.BOARD_SIZE
    ) {
      return { status: false, note: "outOfBounds" };
    }

    // Check if the coordinate Overlaps
    if (this.#checkOverlap(ship, coordinate, orientation))
      return { status: false, note: "overlap" };

    this.ships.push(ship);

    this.#populateCoordinates(ship, coordinate, orientation);
    return { status: true, note: "shipPlaced" };
  }

  // allShipSunk(): boolean -> determine if all ships are sunked
  allShipSunk() {
    if (this.ships.length === 0) return false;
    return this.ships.every((ship) => ship.isSunk());
  }
}

export { Gameboard };
