import { Coordinate } from "./Coordinate.js";

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
  }

  getOpponent(player) {
    return player === this.player1 ? this.player2 : this.player1;
  }

  playMove(coordinate) {
    const opponent = this.getOpponent(this.currentPlayer);
    opponent.board.recieveAttack(coordinate);
    if (this.checkWinner(opponent)) {
      return true;
    }
    this.switchTurn();
    return false;
  }

  async performTurn() {
    const opponent = this.getOpponent(this.currentPlayer);
    const move = await this.currentPlayer.makeMove(opponent.board);
    return this.playMove(move);
  }

  checkWinner(opponent) {
    return opponent.getBoard().allShipSunk();
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
