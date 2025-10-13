import { Game } from "./Game";
import { View } from "./View";

class GameController {
  constructor(game, view) {
    this.game = game;
    this.view = view;
  }

  async start() {
    this.view.renderBoards(this.game.player1.board, this.game.player2.board);
    let isOver = false;
    while (!isOver) {
      // Await move (works for both AI and Human)
      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      isOver = await this.game.performTurn();
      this.view.renderBoards(this.game.player1.board, this.game.player2.board);
      await sleep(1000);
    }
    return this.game.getWinner();
  }
}

export { GameController };
