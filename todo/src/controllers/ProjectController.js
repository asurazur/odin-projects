import { ProjectView } from "../views/ProjectView";
import { ProjectList } from "../models/ProjectList";
import { TodoView } from "../views/TodoView";
import { TodoModel } from "../models/TodoModel";
import Storage from "../models/Storage";
import { ProjectModel } from "../models/ProjectModel";

export class ProjectController {
    constructor() {
        this.ProjectListModel = this.loadFromStorage() || new ProjectList();
        if (!this.ProjectListModel.getProjects().length) {
            this.ProjectListModel.addProject(new ProjectModel("Default"));
        };
        this.ProjectListModel.setActiveProject(
            this.ProjectListModel.getProjects()[0].getId()
        );
        // Set Up Views
        this.ProjectView = new ProjectView();
        this.TodoView = new TodoView();

        // Bind Events
        this.ProjectView.bindAddProject(this.handleAddProject);
        this.TodoView.bindAddTodo(this.handleAddTodo);
        this.updateView();
    }

    handleAddProject = (title) => {
        // Add Project to Project 
        this.ProjectListModel.addProject(new ProjectModel(title));
        this.saveToStorage();
        this.updateView();
    }

    handleRemoveProject = (id) => {
        this.ProjectListModel.removeProject(id);
        this.saveToStorage();
        this.updateView();
    }

    handleSelectProject = (id) => {
        this.ProjectListModel.setActiveProject(id);
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
        this.saveToStorage();
        
        this.updateView();
    }

    handleToggleTodo = (id) => {
        const todo = this.ProjectListModel
            .getActiveProject().todo.find(
                item => item.id == id
        );
        todo.toggleStatus();
        this.saveToStorage();
        this.updateView();
    }

    updateView(){
        // View Update
        this.ProjectView.displayProjects(this.ProjectListModel.getProjects(), this.ProjectListModel.getActiveProject());
        this.ProjectView.changeProjectName(this.ProjectListModel.getActiveProject().title);
        
        // Add Bindings
        this.ProjectView.bindRemoveProject(this.handleRemoveProject);
        this.ProjectView.bindSelectProject(this.handleSelectProject);   

        // Only View Selected Project
        if(this.ProjectListModel.getActiveProject() != null){
            this.TodoView.displayTodos(this.ProjectListModel.getActiveProject().todo);
        }
        this.TodoView.bindToggleTodo(this.handleToggleTodo);
    }

    saveToStorage() {
        Storage.save(this.ProjectListModel);
    }

    loadFromStorage() {
        const data = Storage.load("todoApp");
        if (!data) return null;
        const projectList = new ProjectList();

        // Rebuild Projects
        data.projects.forEach((p) => {
            const project = new ProjectModel(p._title);

            p.todos.forEach((t) => {
                const todo = new TodoModel(
                    t._title,
                    t._description,
                    new Date(t._dueDate),
                    t._priority,
                    t.isFinish
                );
                project.todo = todo;
            })
            projectList.addProject(project);
        })

        return projectList;
    }
}