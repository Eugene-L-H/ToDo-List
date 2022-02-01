import { popupBehavior } from "./modules/addProjectPopup";
import { addProjectPopup } from "./modules/addProjectPopup";
import { addPopupFunctionality } from "./modules/addProjectPopup";
import { Project } from "./modules/project";
import { Task } from "./modules/project";
import { Projects } from "./modules/project";
import { createMobileMenu } from "./modules/mobileMenu";

const blurScreen = document.querySelector('.blur-screen');
const mobileMenuBtn = document.querySelector('.menuButton');
const mobileMenu = document.querySelector('.mobileMenuContainer');

// Generate mobile menu content
mobileMenu.append(createMobileMenu());

// Add project popup.
const popupContainer = document.querySelector('.popupContainer');
popupContainer.append(addProjectPopup());

const mainArea = document.querySelector('#main');
const taskArea = document.querySelector('#content');

// Eventlisteners for '+ Add Project' buttons
const addProjectBtns = document.getElementsByClassName('addProject');
console.log(addProjectBtns);
for (let button of addProjectBtns) {
  button.addEventListener('click', () => {
    popupBehavior(blurScreen, popupContainer);
  });
}

// Give functionality to buttons in the 'Add a Project:' popup
addPopupFunctionality(blurScreen, popupContainer);

// Mobile menu button
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});

