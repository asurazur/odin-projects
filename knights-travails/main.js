import { Queue } from "./queue.js";
function getDelta() {
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

function validMoves(position) {
  let moves = getDelta();
  moves.map((value) => {
    value[0] = value[0] + position[0];
    value[1] = value[1] + position[1];
  });
  moves = moves.filter((value) => {
    return value[0] <= 7 && value[0] >= 0 && value[1] <= 7 && value[1] >= 0;
  });
  return moves;
}

function isMatch(position, destination) {
  return position.every((val, i) => val === destination[i]);
}

function isVisited(target, visited) {
  return visited.some((row) => isMatch(row, target));
}

let current = [0, 0];
let destination = [7, 7];
let path = knightMoves(current, destination);
console.log(path);
