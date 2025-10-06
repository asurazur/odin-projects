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

  /**
   * removes the last element from the list
   */
  pop() {
    // If size is zero
    if (this.size === 0) {
      return;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      this.at(this.size - 2).next = null;
      this.tail = this.at(this.size - 2);
      this.size--;
    }
  }

  /**
   * returns true if the passed in value is in the list and otherwise returns false.
   * @param {string} value
   * @returns {boolean}
   */
  contains(value) {
    let iterator = this.head;
    while (iterator !== null) {
      if (iterator.value === value) {
        return true;
      }
      iterator = iterator.next;
    }
    return false;
  }

  /**
   * returns the index of the node containing value, or null if not found.
   * @param {string} value
   * @returns {number}
   */
  find(value) {
    let iterator = this.head;
    for (let i = 0; iterator !== null; ++i) {
      if (iterator.value === value) {
        return i;
      }
      iterator = iterator.next;
    }
    return null;
  }

  /**
   * inserts a new node with the provided value at the given index.
   * @param {*} value
   * @param {*} index
   */
  insertAt(value, index) {
    // Index must be within valid range
    if (index >= this.size || index < 0) return;
    if (index === 0) {
      this.prepend(value);
      this.size++;
      return;
    }
    let prev = this.head;
    let curr = this.head.next;
    for (let i = 1; curr !== null; ++i) {
      if (i === index) {
        const newNode = new Node(value);
        prev.next = newNode;
        newNode.next = curr;
        this.size++;
        return;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  }

  /**
   *
   * @returns {string} - represents your LinkedList objects as strings,
   * so you can print them out and preview them in the console. The
   * format: ( value ) -> ( value ) -> ( value ) -> null
   */
  toString() {
    let iterator = this.head;
    let result = "";
    while (iterator !== null) {
      result += `( ${iterator.value} ) -> `;
      iterator = iterator.next;
      if (iterator === null) result += `null`;
    }
    return result;
  }
}
