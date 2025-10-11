import { IMoveStrategy } from "./IMoveStrategy.js";

export class AIMoveStrategy extends IMoveStrategy {
  getMove(board) {
    let move;
    do {
      const x = Math.floor(Math.random() * boardSize);
      const y = Math.floor(Math.random() * boardSize);
      move = `[${x},${y}]`;
    } while (board.misses.has(move) || board.hits.has(move));
    const [x, y] = move.split(",").map(Number);
    return { x, y };
  }
}
