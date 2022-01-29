import { addProjectPopup } from "./modules/addProjectPopup";

import { Project } from "./modules/project";
import { Task } from "./modules/project";
import { Projects } from "./modules/project";

const blurScreen = document.querySelector('.blur-screen');
const mainArea = document.querySelector('#main');
const taskArea = document.querySelector('#content');
const addProject = document.querySelector('.addProject');
// const popupCancelBtn = document.querySelector('.popupCancel');
// const popupAddBtn = document.querySelector('.popupAdd');


// "Add Project" button in sidebar.
addProject.addEventListener('click', () => {
  blurScreen.classList.toggle('hide');
  console.log('under blur command');
  mainArea.append(addProjectPopup());

  // Register popup buttons and input field to DOM
  const popupInputProjectName = document.querySelector('.inputProjectName');
  const popupCancelBtn = document.querySelector('.popupCancel');
  const popupAddBtn = document.querySelector('.popupAdd');
  popupCancelBtn.addEventListener('click', () => {
    blurScreen.classList.toggle('hide');
    // Delete popup element.
    mainArea.removeChild(mainArea.lastElementChild);
  });;
});

