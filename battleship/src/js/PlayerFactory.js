import { Player } from "./Player.js";
import { HumanMoveStrategy } from "./HumanMoveStrategy.js";
import { AIMoveStrategy } from "./AIMoveStrategy.js";

export class PlayerFactory {
  static createPlayer(type, name, board) {
    switch (type.toLowerCase()) {
      case "human":
        return new Player(name, board, new HumanMoveStrategy());
      case "ai":
        return new Player(name, board, new AIMoveStrategy());
      default:
        throw new Error(`Unknown player type: ${type}`);
    }
  }
}
