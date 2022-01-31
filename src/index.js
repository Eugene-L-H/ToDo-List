import { addPopupBehavior } from "./modules/addProjectPopup";
import { Project } from "./modules/project";
import { Task } from "./modules/project";
import { Projects } from "./modules/project";
import { createMobileMenu } from "./modules/mobileMenu";

const blurScreen = document.querySelector('.blur-screen');
const mobileMenuBtn = document.querySelector('.menuButton');
const mainArea = document.querySelector('#main');
const taskArea = document.querySelector('#content');
const addProject = document.querySelector('.addProject');
const mobileMenu = document.querySelector('.mobileMenuContainer');

// Generate mobile menu content
mobileMenu.append(createMobileMenu());

// "Add Project" button in sidebar.
addProject.addEventListener('click', () => {
  addPopupBehavior(blurScreen, mainArea);
});

// Mobile menu button
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});

