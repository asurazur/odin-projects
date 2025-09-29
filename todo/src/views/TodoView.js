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

    bindRemoveTodo(handler){
        // 
    }
    
    displayTodos(todos) {
        this.todoList.innerHTML = '';
        todos.forEach((todo) => {
            // Todo Component
            const div = document.createElement('div');
            div.classList.add('todo-item', 'p1');
            div.textContent = todo.title;
            div.dataset.id = todo.getId();
            this.todoList.appendChild(div);
        })
    }
}