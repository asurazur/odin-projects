export class IMoveStrategy {
  getMove(board) {
    throw new Error("getMove() must be implemented by subclass");
  }
}
