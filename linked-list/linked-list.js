class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   * Adds a new node containing value to the end of the list
   * @param {string} value - The data of the node
   */
  append(value) {
    const newNode = new Node(value);
    // If head is null, Make the newNode head
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * Adds a new node containing value to the start of the list
   * @param {string} value - The data of the node
   */
  prepend(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.size++;
  }

  /**
   * returns the node at the given index
   * @param {*} index - index of the node
   * @returns
   */
  at(index) {
    if (index >= this.size || index < 0) return null;
    let iterator = this.head;
    for (let i = 0; i != index; ++i) {
      iterator = iterator.next;
    }
    return iterator;
  }
}
