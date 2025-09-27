import { ToDo } from "./todo.js";

export class Project {
    #todos = [];
    constructor(title) {
        this.title = title;
    }
    set todo(value) {
        this.#todos.push(value);
    }
    get todo() {
        return this.#todos;
    }
    set title(value) {
        this._title = value;
    }
    get title() {
        return this._title;
    }
}