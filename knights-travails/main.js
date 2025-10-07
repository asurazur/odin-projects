class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDelta() {
    return [
      [-2, -1],
      [-2, +1],
      [+2, -1],
      [+2, +1],
      [-1, -2],
      [-1, +2],
      [+1, -2],
      [+1, +2],
    ];
  }

  validMoves() {
    let moves = this.getDelta();
    moves.map((value) => {
      value[0] = value[0] + this.x;
      value[1] = value[1] + this.y;
    });
    moves = moves.filter((value) => {
      return value[0] < 7 && value[0] >= 0 && value[1] < 7 && value[1] >= 0;
    });
    return moves;
  }
}

console.log(new Node(0, 0).validMoves());
