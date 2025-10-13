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

      // Show Who's Turn
      await sleep(250);
      this.view.updateMessage(`${this.game.currentPlayer.name}'s Turn`);
      await sleep(250);

      // Attempt Move
      let log = { status: false };
      while (!log.status) {
        log = await this.game.performTurn();
        this.view.updateMessage(log.note);
      }
      this.view.renderBoards(this.game.player1.board, this.game.player2.board);

      if (this.game.isOver()) {
        isOver = true;
        this.view.updateMessage(`${this.game.getWinner().name} Wins`);
        break;
      }

      this.game.switchTurn();
    }
    return this.game.getWinner();
  }
}

export { GameController };
