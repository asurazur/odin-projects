import { ProjectView } from "../views/ProjectView";
import { ProjectList } from "../models/ProjectList";
import { TodoView } from "../views/TodoView";
import { TodoModel } from "../models/TodoModel";

export class ProjectController {
    constructor() {
        this.ProjectListModel = new ProjectList();
        this.ProjectView = new ProjectView();
        this.TodoView = new TodoView();
        this.TodoModel = new TodoModel();

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
        this.updateView();
    }

    updateView(){
        // Sidebar Update
        this.ProjectView.displayProjects(this.ProjectListModel.getProjects(), this.ProjectListModel.getActiveProject());
        this.ProjectView.bindRemoveProject(this.handleRemoveProject);
        this.ProjectView.bindSelectProject(this.handleSelectProject);   
    }
}