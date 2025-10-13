// Player.js
export class Player {
  constructor(name, board, moveStrategy) {
    this.name = name;
    this.board = board;
    this.moveStrategy = moveStrategy;
  }

  makeMove(opponentBoard) {
    return this.moveStrategy.getMove(opponentBoard);
  }

  getBoard() {
    return this.board;
  }
}
