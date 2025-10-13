import "./styles/styles.css";
import { PlayerFactory } from "./js/PlayerFactory.js";
import { Gameboard } from "./js/Gameboard.js"; // Assume this class exists
import { Game } from "./js/Game.js";
import { Ship } from "./js/Ship.js";
import { Coordinate } from "./js/Coordinate.js";
import { View } from "./js/View.js";
import { GameController } from "./js/GameController.js";

const view = new View();

// Two random AIs (for demonstration)
const p1 = PlayerFactory.createPlayer("human", "One", new Gameboard());
p1.moveStrategy.getMoveFn = async (opponentBoard) => {
  return new Promise((resolve) => {
    // View listens for cell click, then resolves the move
    view.onCellClick = (coord) => resolve(coord);
  });
};
p1.board.placeShip(new Ship(5), new Coordinate(0, 0), "horizontal");
const p2 = PlayerFactory.createPlayer("ai", "Two", new Gameboard());
p2.board.placeShip(new Ship(5), new Coordinate(0, 0), "vertical");

const game = new Game(p1, p2);
const controller = new GameController(game, view);

const winner = await controller.start();
console.log(winner);
