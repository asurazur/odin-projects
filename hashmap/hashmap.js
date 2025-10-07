import { LinkedList } from "./linked-list.js";

class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.bucket = new Array(capacity).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const node = this.bucket[index].getNode(key);
    if (node !== null) {
      node.data = value;
    }
    this.bucket[index].append(key);
    this.bucket.tail.data = value;
  }

  get(key) {
    const index = this.hash(key);
    const node = this.bucket[index].getNode(key);
    if (node === null) return node;
    return node.data;
  }

  has(key) {
    const index = this.hash(key);
    return this.bucket[index].contains(key);
  }

  remove(key) {
    const index = this.hash(key);
    const bucketPos = this.bucket[index].find(key);
    if (bucketPos === null) return false;
    this.bucket[index].removeAt(bucketPos);
    return true;
  }
}
