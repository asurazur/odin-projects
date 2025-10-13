import { Coordinate } from "./Coordinate.js";
import { IMoveStrategy } from "./IMoveStrategy.js";

export class HumanMoveStrategy extends IMoveStrategy {
  constructor(getMoveFn) {
    super();
    this.getMoveFn = getMoveFn ?? null;
  }

  async getMove(board) {
    const move = await this.getMoveFn(board);
    return new Coordinate(move[0], move[1]);
  }
}
