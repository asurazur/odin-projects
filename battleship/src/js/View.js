import { Coordinate } from "./Coordinate";

class View {
  constructor(onCellClick) {
    this.playerBoardContainer = document.querySelector("#player-board");
    this.enemyBoardContainer = document.querySelector("#enemy-board");
    this.messageContainer = document.querySelector("#message");

    // Event callback placeholders
    this.onCellClick = () => {}; // To be assigned by GameController
  }

  renderBoards(playerBoard, enemyBoard) {
    // Call _renderBoard for player and enemy
    this._renderBoard(this.playerBoardContainer, playerBoard, false);
    this._renderBoard(this.enemyBoardContainer, enemyBoard, true);
  }
  _renderBoard(container, gameboard, isEnemy) {
    container.innerHTML = "";
    const board = gameboard.board;
    const misses = gameboard.misses;
    const hits = gameboard.hits;
    const title = container.parentElement.querySelector(".board-title");
    if (isEnemy) {
      title.innerText = "Enemy's Board";
      title.style.color = "orange";
    } else {
      title.innerText = "Player's Board";
      title.style.color = "skyblue";
    }
    for (let row = 0; row < board.length; ++row) {
      for (let column = 0; column < board[row].length; ++column) {
        const field = document.createElement("div");
        field.classList.add("field");
        if (board[row][column] !== null) {
          field.classList.add("ship");
        }
        const coordinate = new Coordinate(row, column).toString();
        if (misses.has(coordinate)) {
          field.classList.add("miss");
        } else if (hits.has(coordinate)) {
          field.classList.add("hit");
        }

        if (isEnemy && this.onCellClick) {
          field.addEventListener("click", () => {
            this.onCellClick([row, column]);
          });
        }

        container.appendChild(field);
      }
    }
  }

  //   Create A Popup Text to show Who's Turn It is
}

export { View };
