export class TodoModel{
    constructor(title, description, dueDate, priority){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    set title(value){
        this._title = value;
    }
    get title(){
        return this._title;
    }
    set description(value){
        this._description = value;
    }
    get description(){
        return this._description;
    }
    set dueDate(value){
        this._dueDate = value;
    }
    get dueDate(){
        return this._dueDate;
    }
    set priority(value){
        this._priority = value;
    }
    get priority(){
        return this._priority;
    }
    getId(){
        return this.id;
    }
}