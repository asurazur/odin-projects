import { IMoveStrategy } from "./IMoveStrategy.js";

export class HumanMoveStrategy extends IMoveStrategy {
  constructor(getMoveFn) {
    this.getMoveFn = getMoveFn;
  }

  getMove(board) {
    return this.getMoveFn();
  }
}
