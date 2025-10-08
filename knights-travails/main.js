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

function isValid(pos) {
  if (pos.length !== 2) return false;
  for (const point of pos) {
    if (point > 7 || point < 0) return false;
  }
  return true;
}

function validMoves(position) {
  let moves = getDelta();
  moves.map((value) => {
    value[0] = value[0] + position[0];
    value[1] = value[1] + position[1];
  });
  moves = moves.filter((value) => {
    return isValid(value);
  });
  return moves;
}

function isMatch(position, destination) {
  return position.every((val, i) => val === destination[i]);
}

function isVisited(target, visited) {
  return visited.some((row) => isMatch(row, target));
}

function getPath(current, parent, path = []) {
  if ((current ?? null) === null) return path.reverse();
  path.push(current);
  return getPath(parent[current], parent, path);
}

function knightMoves(position, destination) {
  if (!(isValid(position) && isValid(destination)))
    throw new Error("The coordinates are invalid");
  const queue = new Queue();
  let visited = [];
  const parent = {};
  queue.enqueue(position);
  while (!queue.isEmpty()) {
    let current = queue.dequeue();
    visited.push(current);
    if (isMatch(current, destination)) {
      return getPath(current, parent);
    }
    let moves = validMoves(current);
    moves = moves.filter((move) => !isVisited(move, visited));
    moves.forEach((move) => {
      queue.enqueue(move);
      parent[move] = current;
    });
  }
}

let current = [3, 3];
let destination = [4, 3];
let path = knightMoves(current, destination);
console.log(
  `You made it in ${path.length} ${
    path.length === 1 ? "move" : "moves"
  }! Here's your path:`
);
console.log(path);
