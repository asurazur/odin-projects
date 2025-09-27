import { Project } from './js/project.js';
import { ToDo } from './js/todo.js';

const project = new Project("Default")
project.todo = new ToDo('Clean Kitchen', 'Wash the dishes', new Date("09/28/2025"), 'medium')
project.todo = new ToDo('Buy Groceries', 'Go to Robinsons', new Date("09/28/2025"), 'medium')
console.log(project.todo)