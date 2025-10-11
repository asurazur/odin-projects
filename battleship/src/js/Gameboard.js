import { Coordinate } from "./Coordinate.js";

class Gameboard {
  static BOARD_SIZE = 10;
  static MAX_COORDINATE = this.BOARD_SIZE - 1;

  constructor() {
    this.initializeBoard();
  }

  initializeBoard() {
    // 10 x 10 Boolean Array, to determine if the element is hit or not
    this.board = [
      ...new Array(Gameboard.BOARD_SIZE)
        .fill(null)
        .map(() => new Array(Gameboard.BOARD_SIZE).fill("")),
    ];
    // const ships = {carrier: [5pairs], battleship: [4pairs], cruiser: [3pairs], sub: [3pairs], destroyer: [2pairs]}
    this.ships = new Map([
      ["carrier"],
      ["battleship"],
      ["cruiser"],
      ["submarine"],
      ["destroyer"],
    ]);
  }

  #isOutofBounds(move) {
    return move.getX() > Gameboard.MAX_COORDINATE ||
      move.getY() > Gameboard.MAX_COORDINATE
      ? true
      : false;
  }

  // recieveAttack(x, y): {status: boolean, note: string} -> Determine if a ship is hit or not | already attacked
  recieveAttack(attack) {
    if (this.#isOutofBounds(attack)) {
      return { status: false, note: "outOfBounds" };
    }

    const [x, y] = attack.getCoordinate();
    const isShot = this.board[x][y] === "shot";
    if (isShot) {
      return { status: false, note: "shot" };
    }

    if (this.ships.has(this.board[x][y])) {
      const shipType = this.board[x][y];
      this.ships.get(shipType).hit();
      this.board[x][y] = "shot";
      return { status: true, note: "ship" };
    }

    this.board[x][y] = "shot";
    return { status: true, note: "miss" };
  }

  placeShip(ship, coordinate, orientation) {
    // Able to Place Ships at Specific Coordinates, No Overlapping or Out of Bounds
    // Returns True if successful, False if unsuccessful
  }

  allShipSunk() {
    // allShipSunk(): boolean -> determine if all ships are sunked
  }
}
