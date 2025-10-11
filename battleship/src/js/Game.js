import { Coordinate } from "./Coordinate.js";

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
  }

  takeTurn() {
    const opponent =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;

    // Make Move
    const { x, y } = this.currentPlayer.makeMove();
    // Recieve Attack
    opponent.getBoard().recieveAttack(new Coordinate(x, y));
    // Check Winner
    if (this.checkWinner(opponent)) return true;
    // Switch Turn
    this.switchTurn();
    return false;
  }

  checkWinner(player) {
    return player.getBoard().allShipSunk();
  }

  getWinner() {
    return this.player1.getBoard().allShipSunk() ? this.player2 : this.player1;
  }

  switchTurn() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
}

export { Game };
