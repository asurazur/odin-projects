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
