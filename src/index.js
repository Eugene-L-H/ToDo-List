import { addProjectPopup } from "./modules/addProjectPopup";
import { Project } from "./modules/project";
import { Task } from "./modules/project";
import { Projects } from "./modules/project";

const blurScreen = document.querySelector('.blur-screen');
const mainArea = document.querySelector('#main');
const taskArea = document.querySelector('#content');
const addProject = document.querySelector('.addProject');

addProject.addEventListener('click', () => {
  blurScreen.classList.add('blur');
  console.log('under blur command');
  mainArea.append(addProjectPopup());
})