import { ProjectView } from "../views/ProjectView";
import { ProjectList } from "../models/ProjectList";
import { TodoView } from "../views/TodoView";

export class ProjectController {
    constructor() {
        this.ProjectListModel = new ProjectList();
        this.ProjectView = new ProjectView();
        this.TodoView = new TodoView();

        // Bind Events
        this.ProjectView.bindAddProject(this.handleAddProject);
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

    handleAddTodo = () => {
        this.ProjectListModel.getActiveProject().todo = new TodoModel('Task')
    }

    updateView(){
        // Sidebar Update
        this.ProjectView.displayProjects(this.ProjectListModel.getProjects(), this.ProjectListModel.getActiveProject());
        this.ProjectView.bindRemoveProject(this.handleRemoveProject);
        this.ProjectView.bindSelectProject(this.handleSelectProject);   
    }
}