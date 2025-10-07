import { Tree } from "./binary-search-tree.js";

const array = new Array(20).fill(null).map(() => {
  return Math.floor(Math.random() * 100);
});
const tree = new Tree(array);
tree.prettyPrint();
console.log(`isBalanced: ${tree.isBalanced()}`);

let preOrder = [];
tree.preOrderForEach((node) => {
  preOrder.push(node.data);
});
console.log(`Pre-Order: ${preOrder}`);

let inOrder = [];
tree.inOrderForEach((node) => {
  inOrder.push(node.data);
});
console.log(`In-Order: ${inOrder}`);

let postOrder = [];
tree.postOrderForEach((node) => {
  postOrder.push(node.data);
});
console.log(`Post-Order: ${postOrder}`);

tree.insert(200);
tree.insert(201);
console.log(`isBalanced after inserting new nodes: ${tree.isBalanced()}`);

tree.rebalance();
console.log(`isBalanced after rebalance(): ${tree.isBalanced()}`);

preOrder = [];
tree.preOrderForEach((node) => {
  preOrder.push(node.data);
});
console.log(`Pre-Order: ${preOrder}`);

inOrder = [];
tree.inOrderForEach((node) => {
  inOrder.push(node.data);
});
console.log(`In-Order: ${inOrder}`);

postOrder = [];
tree.postOrderForEach((node) => {
  postOrder.push(node.data);
});
console.log(`Post-Order: ${postOrder}`);

tree.prettyPrint();
