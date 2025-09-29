export class ProjectModel {
    #todos = [];
    constructor(title) {
        this.id = crypto.randomUUID();
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
    getId(){
        return this.id;
    }
}