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

  insert(value) {
    let iterator = this.root;
    if (iterator.data === value) return;
    const node = new Node(value);
    while (iterator !== null) {
      if (value < iterator.data) {
        if (iterator.left === null) {
          iterator.left = node;
          return;
        }
        iterator = iterator.left;
      } else {
        if (iterator.right === null) {
          iterator.right = node;
          return;
        }
        iterator = iterator.right;
      }
    }
  }

  deleteItem(value, node = this.root, parent = null) {
    if (node === null) return;

    if (value < node.data) {
      this.deleteItem(value, node.left, node);
    } else if (value > node.data) {
      this.deleteItem(value, node.right, node);
    } else {
      // Node found
      if (node.left === null && node.right === null) {
        // Leaf node
        if (parent === null) {
          this.root = null;
        } else if (parent.left === node) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (node.left === null || node.right === null) {
        // One child
        const child = node.left || node.right;
        if (parent === null) {
          this.root = child;
        } else if (parent.left === node) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      } else {
        // Two children: find inorder successor
        let successorParent = node;
        let successor = node.right;
        while (successor.left !== null) {
          successorParent = successor;
          successor = successor.left;
        }
        node.data = successor.data;
        // Delete successor
        if (successorParent.left === successor) {
          successorParent.left = successor.right;
        } else {
          successorParent.right = successor.right;
        }
      }
    }
  }

  find(value) {
    let iterator = this.root;
    while (iterator !== null) {
      if (value === iterator.data) {
        return iterator;
      } else if (value < iterator.data) {
        iterator = iterator.left;
      } else {
        iterator = iterator.right;
      }
    }
    return null;
  }

  #checkIsCallback(callback) {
    if (callback == null) {
      throw new Error("callback Function Required");
    }
    if (typeof callback !== "function") {
      throw new Error("Argument is not a callback function");
    }
  }

  levelOrderForEach(callback) {
    this.#checkIsCallback(callback);
    if (this.root === null) return;
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      callback(node);
      if (node.left !== null) {
        queue.enqueue(node.left);
      }
      if (node.right !== null) {
        queue.enqueue(node.right);
      }
    }
  }

  preOrderForEach(callback, node = this.root) {
    this.#checkIsCallback(callback);
    if (node === null) return;
    callback(node);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);
  }

  inOrderForEach(callback, node = this.root) {
    this.#checkIsCallback(callback);
    if (node === null) return;
    this.inOrderForEach(callback, node.left);
    callback(node);
    this.inOrderForEach(callback, node.right);
  }

  postOrderForEach(callback, node = this.root) {
    this.#checkIsCallback(callback);
    if (node === null) return;
    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);
    callback(node);
  }

  height(value) {
    let iterator = this.root;
    let counter = 0;
    while (iterator !== null) {
      if (iterator.data === value) return counter;
      if (value < iterator.data) iterator = iterator.left;
      else iterator = iterator.right;
      counter++;
    }
    return null;
  }

  prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return;
    return this.elements.shift();
  }

  peek() {
    return this.elements[0];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }
}
