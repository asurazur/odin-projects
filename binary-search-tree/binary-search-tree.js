class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.root = null;
    array = array.filter((value, index) => array.indexOf(value) === index);
    array = array.sort((a, b) => a - b);
    this.root = this.#_buildTree(array);
  }

  //   Returns the Root Node
  #_buildTree(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const rootNode = new Node(array[mid]);
    rootNode.left = this.#_buildTree(array.toSpliced(mid, array.length));
    rootNode.right = this.#_buildTree(array.toSpliced(0, mid + 1));
    return rootNode;
  }
}
