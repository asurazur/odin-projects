import { LinkedList } from "./linked-list.js";

export class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.bucket = new Array(capacity).fill(null).map(() => new LinkedList());
  }

  _hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this._hash(key);
    const node = this.bucket[index].getNode(key);
    if (node !== null) {
      node.data = value;
      return;
    }
    this.bucket[index].append(key);
    this.bucket[index].tail.data = value;

    // Double the size
    const currentLoad = this.length() / this.capacity;
    if (currentLoad >= this.loadFactor) this._resize();
  }

  get(key) {
    const index = this._hash(key);
    const node = this.bucket[index].getNode(key);
    if (node === null) return node;
    return node.data;
  }

  has(key) {
    const index = this._hash(key);
    return this.bucket[index].contains(key);
  }

  remove(key) {
    const index = this._hash(key);
    const bucketPos = this.bucket[index].find(key);
    if (bucketPos === null) return false;
    this.bucket[index].removeAt(bucketPos);
    return true;
  }

  length() {
    return this.bucket.reduce((acc, curr) => acc + curr.size, 0);
  }

  clear() {
    this.capacity = 16;
    this.bucket = new Array(capacity).fill(null).map(() => new LinkedList());
  }

  keys() {
    let result = [];
    for (const list of this.bucket) {
      let iterator = list.head;
      while (iterator !== null) {
        result.push(iterator.value);
        iterator = iterator.next;
      }
    }
    return result;
  }

  values() {
    let result = [];
    for (const list of this.bucket) {
      let iterator = list.head;
      while (iterator !== null) {
        result.push(iterator.data);
        iterator = iterator.next;
      }
    }
    return result;
  }

  entries() {
    let result = [];
    for (const list of this.bucket) {
      let iterator = list.head;
      while (iterator !== null) {
        result.push([iterator.value, iterator.data]);
        iterator = iterator.next;
      }
    }
    return result;
  }

  _resize() {
    const oldBucket = this.bucket;
    this.capacity = this.capacity * 2;
    this.bucket = new Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());
    for (const list of oldBucket) {
      let iterator = list.head;
      while (iterator !== null) {
        this.set(iterator.value, iterator.data);
        iterator = iterator.next;
      }
    }
  }
}
