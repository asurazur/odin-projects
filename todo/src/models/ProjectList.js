import { ProjectModel } from "./ProjectModel.js";

export class ProjectList {
    constructor() {
        this.projects = [];
        this.activeProject = null;
    };

    addProject(title) {
        const project = new ProjectModel(title);
        this.projects.push(project);
    };

    removeProject(id) {
        this.projects = this.projects.filter(
            project => project.id !== id
        );
    };

    setActiveProject(id) {
        this.activeProject = this.projects.find(
            project => project.id === id
        )
    }

    getActiveProject() {
        return this.activeProject;
    }

    getProjects() {
        return this.projects;
    };

    getProject(id) {
        this.projects.filter(
            project => project.id == id
        );
    };
}

// const projects = new ProjectList();
// projects.addProject('Cleaning');
// projects.addProject('Feeding');
// console.log(projects)
// console.log('Hello')