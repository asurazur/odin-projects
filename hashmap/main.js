import { HashMap } from "./hashmap.js";

const test = new HashMap(); // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.entries());

test.set("apple", "crimson");
console.log(test.get("apple"));
console.log(test.bucket[test._hash("apple")]);
console.log(test.length());

test.set("moon", "silver");
console.log(test);

console.log(test.get("moon"));
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test);
