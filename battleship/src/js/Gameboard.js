class Gameboard {
  static BOARD_SIZE = 10;
  static MAX_COORDINATE = this.BOARD_SIZE - 1;

  constructor() {}

  initializeBoard() {
    // 10 x 10 Boolean Array, to determine if the element is hit or not
    // const board = []
    // const ships = {carrier: [5pairs], battleship: [4pairs], cruiser: [3pairs], sub: [3pairs], destroyer: [2pairs]}
  }

  recieveAttack(x, y) {
    // recieveAttack(x, y): boolean -> Determine if a ship is hit or not | already attacked
  }

  placeShip(ship, x, y, orientation) {
    // Able to Place Ships at Specific Coordinates, No Overlapping or Out of Bounds
    // Returns True if successful, False if unsuccessful
  }

  isDefeated() {
    // isDefeated(): boolean -> determine if all ships are sunked
  }
}
