import { ProjectObj } from "./modules/project";
import { TaskObj } from "./modules/project";
import { Projects } from "./modules/project";
import { createMobileMenu } from "./modules/mobileMenu";
import { popupBehavior } from "./modules/addProjectPopup";
import { addProjectPopup } from "./modules/addProjectPopup";
import { addPopupFunctionality } from "./modules/addProjectPopup";
import { displayProjectInTaskArea } from "./modules/addProjectPopup";

const mainArea = document.querySelector('#main');
const tasksArea = document.querySelector('.tasks-area');

// Object that will hold all project objects
let userProjectsMain = {};

const blurScreen = document.querySelector('.blur-screen');

// Generate mobile menu content
const mobileMenuBtn = document.querySelector('.menuButton');
const mobileMenu = document.querySelector('.mobileMenuContainer');
mobileMenu.append(createMobileMenu());

// Add project popup.
const popupContainer = document.querySelector('.popupContainer');
popupContainer.append(addProjectPopup());
addPopupFunctionality(
  blurScreen,
  popupContainer,
  ProjectObj,
  userProjectsMain,
  tasksArea
  );

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
