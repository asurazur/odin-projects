import { ProjectView } from "../views/ProjectView";
import { ProjectList } from "../models/ProjectList";
import { TodoView } from "../views/TodoView";
import { TodoModel } from "../models/TodoModel";

export class ProjectController {
    constructor() {
        this.ProjectListModel = new ProjectList();
        this.ProjectView = new ProjectView();
        this.TodoView = new TodoView();

        // Bind Events
        this.ProjectView.bindAddProject(this.handleAddProject);
        this.TodoView.bindAddTodo(this.handleAddTodo);
        this.updateView();
    }

    handleAddProject = (title) => {
        // Add Project to Project List
        this.ProjectListModel.addProject(title);
        this.updateView();
    }

    handleRemoveProject = (id) => {
        this.ProjectListModel.removeProject(id);
        this.updateView();
    }

    handleSelectProject = (id) => {
        this.ProjectListModel.setActiveProject(id);
        this.ProjectView.changeProjectName(this.ProjectListModel.getActiveProject().title);
        // update TodoView
        this.updateView();
    }

    handleAddTodo = (formData) => {
        const title = formData.get('title');
        const description = formData.get('description');
        const priority = formData.get('priority');
        const dueDate = new Date(formData.get('dueDate'));
        
        this.ProjectListModel.getActiveProject().todo = new TodoModel(
            title, description, dueDate, priority
        );
        
        this.updateView();
    }

    handleToggleTodo = (id) => {
        const todo = this.ProjectListModel
            .getActiveProject().todo.find(
                item => item.id == id
        );
        todo.toggleStatus();
        this.updateView();
    }

    updateView(){
        // View Update
        this.ProjectView.displayProjects(this.ProjectListModel.getProjects(), this.ProjectListModel.getActiveProject());
        
        // Add Bindings
        this.ProjectView.bindRemoveProject(this.handleRemoveProject);
        this.ProjectView.bindSelectProject(this.handleSelectProject);   

        // Only View Selected Project
        if(this.ProjectListModel.getActiveProject() != null){
            this.TodoView.displayTodos(this.ProjectListModel.getActiveProject().todo);
        }
        this.TodoView.bindToggleTodo(this.handleToggleTodo);
    }
}