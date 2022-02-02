import { ProjectObj } from "./modules/project";
import { TaskObj } from "./modules/project";
import { Projects } from "./modules/project";
import { createMobileMenu } from "./modules/mobileMenu";
import { popupBehavior } from "./modules/addProjectPopup";
import { addProjectPopup } from "./modules/addProjectPopup";
import { addPopupFunctionality } from "./modules/addProjectPopup";

// Object that will hold all project objects
let userProjects = Projects.registeredProjects;

const blurScreen = document.querySelector('.blur-screen');

// Generate mobile menu content
const mobileMenuBtn = document.querySelector('.menuButton');
const mobileMenu = document.querySelector('.mobileMenuContainer');
mobileMenu.append(createMobileMenu());

// Add project popup.
const popupContainer = document.querySelector('.popupContainer');
popupContainer.append(addProjectPopup());
addPopupFunctionality(blurScreen, popupContainer, ProjectObj, userProjects);

const mainArea = document.querySelector('#main');
const taskArea = document.querySelector('#content');

// Eventlisteners for '+ Add Project' buttons
const addProjectBtns = document.getElementsByClassName('addProject');
for (let button of addProjectBtns) {
  button.addEventListener('click', () => {
    popupBehavior(blurScreen, popupContainer);
  });
}



// Mobile menu button
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});
