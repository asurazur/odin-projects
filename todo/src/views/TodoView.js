import { formatDistance, subDays } from 'date-fns';

export class TodoView {
    // Handles The Todo of an Active PRoject
    constructor(){
        // Instansiate UI components of Todo
        this.todoList = document.querySelector('#todo-list');
        this.addButton = document.querySelector('#add-todo');
        this.form = document.querySelector('#todo-form');
        this.modal = document.querySelector('#todo-dialog');
        this.submitBtn = document.querySelector('#submit-btn');
        this.cancelBtn = this.modal.querySelector('#cancel-btn');
        this.#setUpModal();
    }

    #setUpModal() {
        this.addButton.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            // Show Modal
            this.modal.showModal();
        })

        this.submitBtn.addEventListener('click', (e) => {
            return;
        })

        this.cancelBtn.addEventListener('click', (e) => {
            this.form.reset();
            this.modal.close();
        })
    }

    bindAddTodo(handler){
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            handler(new FormData(this.form));
            this.form.reset();
            this.modal.close();
        })
    }

    bindToggleTodo(handler){
        const todoItems = this.todoList.querySelectorAll('.todo-item');
        todoItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                handler(item.dataset.id)
                if (e.target.tagName.toLowerCase() === 'input') return;
            })
        })
    }
    
    displayTodos(todos) {
        this.todoList.innerHTML = '';
        todos.forEach((todo) => {
            this.#createTodoItem(todo);
            this.#statusStyler(todo);
        })
    }

    #statusStyler(todo){
        const todoDiv = document.querySelector(`.todo-item[data-id="${todo.getId()}"]`)
        const checkbox = todoDiv.querySelector('input[type="checkbox"]')
        if(todo.getIsFinish()) {
            todoDiv.classList.add('finished');
            checkbox.checked = true;
        }
        else{
            todoDiv.classList.remove('finished');
            checkbox.checked = false;
        }
    }

    #createTodoItem(todo) {
        // Todo Component
        const div = document.createElement('div');
        div.classList.add('todo-item');
        div.dataset.id = todo.getId();
        this.todoList.appendChild(div);
        
        // CheckBox
        const checkboxDiv = document.createElement('div');
        div.appendChild(checkboxDiv);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkboxDiv.appendChild(checkbox);
        
        // Todo Contents
        const propertiesDiv = document.createElement('div');
        div.appendChild(propertiesDiv);
        
        const nameDiv = document.createElement('div'); 
        propertiesDiv.appendChild(nameDiv);
        nameDiv.classList.add('p1');
        nameDiv.textContent = todo.title;

        const descriptionDiv = document.createElement('div'); 
        propertiesDiv.appendChild(descriptionDiv);
        descriptionDiv.classList.add('p2');
        descriptionDiv.textContent = todo.description;

        const priorityDiv = document.createElement('div'); 
        propertiesDiv.appendChild(priorityDiv);
        priorityDiv.classList.add('p2');
        priorityDiv.textContent = `Priority: ${todo.priority}`;

        const dueDiv = document.createElement('div');
        propertiesDiv.appendChild(dueDiv);
        dueDiv.classList.add('p2');
        dueDiv.textContent = formatDistance(todo.dueDate, new Date(), { addSuffix: true })
    }
}