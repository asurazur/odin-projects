import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

const body = document.querySelector("body");
const listElement = document.createElement("p");
listElement.textContent = `Linked List: ${list.toString()}`;
body.appendChild(listElement);
