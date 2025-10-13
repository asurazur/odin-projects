import { Coordinate } from "./Coordinate.js";
import { IMoveStrategy } from "./IMoveStrategy.js";

export class AIMoveStrategy extends IMoveStrategy {
  getMove(board) {
    let move;
    do {
      const x = Math.floor(Math.random() * board.board.length);
      const y = Math.floor(Math.random() * board.board.length);
      move = `${x},${y}`;
    } while (board.misses.has(move) || board.hits.has(move));
    const [x, y] = move.split(",").map(Number);
    return new Coordinate(x, y);
  }
}
