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
    this.board = Array.from({ length: Gameboard.BOARD_SIZE }, () =>
      Array(Gameboard.BOARD_SIZE).fill(null)
    );
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

  #checkOverlap(ship, coordinate, direction) {
    let [row, column] = coordinate.getCoordinate();
    for (let i = 0; i < ship.getLength(); ++i) {
      const r = direction === "vertical" ? row + i : row;
      const c = direction === "horizontal" ? column + i : column;

      // 🛑 Boundary check to prevent undefined access
      if (r >= Gameboard.BOARD_SIZE || c >= Gameboard.BOARD_SIZE) {
        return true; // Treat out-of-bounds as overlap
      }

      if (direction === "horizontal") {
        if (this.board[row][column + i] !== null) {
          return true;
        }
      } else if (direction === "vertical") {
        if (this.board[row + i][column] !== null) {
          return true;
        }
      }
    }
    return false;
  }

  #populateCoordinates(ship, coordinate, direction) {
    let [row, column] = coordinate.getCoordinate();
    for (let i = 0; i < ship.getLength(); ++i) {
      if (direction === "horizontal") {
        this.board[row][column + i] = ship;
      } else if (direction === "vertical") {
        this.board[row + i][column] = ship;
      }
    }
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

    const [x, y] = attack.getCoordinate();
    if (this.board[x][y] === null) {
      this.misses.add(stringCoordinate);
      return { status: true, note: "miss" };
    } else {
      this.board[x][y].hit();
      this.hits.add(stringCoordinate);
      return { status: true, note: "ship" };
    }
  }

  placeShip(ship, coordinate, direction) {
    // Able to Place Ships at Specific Coordinates, No Overlapping or Out of Bounds
    if (direction !== "horizontal" && direction !== "vertical") {
      return { status: false, note: "invalidOrientation" };
    }

    const [row, column] = coordinate.getCoordinate();
    if (this.#isOutofBounds(coordinate)) {
      return { status: false, note: "outOfBounds" };
    }

    if (
      direction === "horizontal" &&
      column + ship.length > Gameboard.BOARD_SIZE
    ) {
      return { status: false, note: "outOfBounds" };
    }

    if (direction === "vertical" && row + ship.length > Gameboard.BOARD_SIZE) {
      return { status: false, note: "outOfBounds" };
    }

    // Check if the coordinate Overlaps
    if (this.#checkOverlap(ship, coordinate, direction))
      return { status: false, note: "overlap" };

    this.ships.push(ship);

    this.#populateCoordinates(ship, coordinate, direction);
    return { status: true, note: "shipPlaced" };
  }

  randomPlaceShip() {
    this.initializeBoard();
    const sizes = [5, 4, 3, 3, 2];

    for (const size of sizes) {
      let placed = false;

      while (!placed) {
        const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

        // 🔧 Constrain random starting position
        const row =
          direction === "vertical"
            ? Math.floor(Math.random() * (Gameboard.BOARD_SIZE - size + 1))
            : Math.floor(Math.random() * Gameboard.BOARD_SIZE);

        const col =
          direction === "horizontal"
            ? Math.floor(Math.random() * (Gameboard.BOARD_SIZE - size + 1))
            : Math.floor(Math.random() * Gameboard.BOARD_SIZE);

        const ship = new Ship(size);
        const coordinate = new Coordinate(row, col);

        const result = this.placeShip(ship, coordinate, direction);
        placed = result.status;
      }
    }
  }

  // allShipSunk(): boolean -> determine if all ships are sunked
  allShipSunk() {
    if (this.ships.length === 0) return false;
    return this.ships.every((ship) => ship.isSunk());
  }
}

export { Gameboard };
