export class TodoView {
    // Handles The Todo of an Active PRoject
    constructor(){
        // Instansiate UI components of Todo
        this.addButton = document.querySelector('#add-todo');
        this.modal = document.querySelector('#todo-dialog');
        this.cancelBtn = this.modal.querySelector('#cancel-btn')
        this.form = document.querySelector('#todo-form');
        this.#setUpModal();
    }

    bindAddTodo(handler){
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            handler(new FormData(this.form));
            this.form.reset();
            this.modal.close();
        })
    }

    #setUpModal() {
        this.addButton.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            // Show Modal
            this.modal.showModal();
        })
        this.cancelBtn.addEventListener('click', (e) => {
            this.modal.close();
        })

    }

    bindRemoveTodo(handler){
        // 
    }
    
    displayTodos(todos) {
        //
    }
}