export class ProjectView {
    constructor(){
        this.projectForm = document.querySelector('#add-project-form');
        this.projectDiv = document.querySelector('#project-div');
        this.input = document.querySelector('#project-name-field');
        this.deleteButtons = this.projectDiv.querySelectorAll('button');
        this.projectName = document.querySelector('#project-name');
    }

    bindAddProject(handler){
        this.projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if(this.input.value.trim()){
                handler(this.input.value);
                this.input.value = "";
            }            
        })
    }

    bindRemoveProject(handler){
        this.deleteButtons = this.projectDiv.querySelectorAll('button');
        this.deleteButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const id = button.closest('.project-item').dataset.id;
                handler(id);
            })
            
        })
    }
    
    bindSelectProject(handler){
        const projectsContainer = this.projectDiv.querySelectorAll('.project-item');
        projectsContainer.forEach((project) => {
            project.addEventListener('click', (e) => {
                e.preventDefault();
                const id = project.dataset.id;
                projectsContainer.forEach(project => project.classList.remove('active'));
                handler(id);
            })
        })
    }

    changeProjectName(name){
        this.projectName.innerText = name;
    }

    displayProjects(projects, activeProject) {
        this.projectDiv.innerHTML = "";
        projects.forEach(project => {
            const div = document.createElement("div");
            div.innerText = project.title;
            div.dataset.id = project.id;
            div.classList.add('p1');
            div.classList.add('project-item')
            
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            div.append(deleteBtn);

            if(activeProject != null && project.id === activeProject.id){
                div.classList.add('active');
            }
            div.dataset.isActive = (activeProject != null && project.id === activeProject.id)

            this.projectDiv.appendChild(div);
        });
    }
}