export const addProjectPopup = () => {
  const popup = document.createElement('div');
  popup.classList.add('projectPopup');

  const title = document.createElement('p');
  title.classList.add('popupTitle');
  title.textContent = 'Add a Project:';

  const projectName = document.createElement('input');
  projectName.classList.add('inputProjectName');
  projectName.setAttribute('name', 'inputProjectName');
  projectName.setAttribute('placeholder', 'Project Name')

  const cancel = document.createElement('input');
  cancel.classList.add('popupCancel');
  cancel.setAttribute('type', 'button');
  cancel.setAttribute('value', 'Cancel');


  const addBtn = document.createElement('input');
  addBtn.classList.add('popupAdd');
  addBtn.setAttribute('type', 'button');
  addBtn.setAttribute('value', 'Add');

  const buttonContaier = document.createElement('div');
  buttonContaier.classList.add('buttonContainer');
  buttonContaier.append(cancel);
  buttonContaier.append(addBtn);

  popup.append(title);
  popup.append(projectName);
  popup.append(buttonContaier);

  return popup;
}

export const popupBehavior = (blurScreen, popupContainer) => {
  blurScreen.classList.toggle('hide');
  popupContainer.classList.toggle('hide');
}

export const addPopupFunctionality = (blurScreen, popupContainer, ProjectObj, userProjects) => {
  // Register popup buttons and input field to DOM
  const projectName = document.querySelector('.inputProjectName');
  const cancelBtn = document.querySelector('.popupCancel');
  const addBtn = document.querySelector('.popupAdd');
  const sidebarProjectList = document.querySelector('.projectsList');

  cancelBtn.addEventListener('click', () => {;
    blurScreen.classList.toggle('hide');
    popupContainer.classList.toggle('hide');
    document.querySelector('.inputProjectName').value = '';
  });

  addBtn.addEventListener('click', () => {
    if (projectName.value === '') return;
    
    // Create project object
    const newProject = new ProjectObj(projectName.value);
    console.log(newProject.title);
    userProjects.push(newProject);

    // Populate project list in sidebar
    sidebarProjectList.innerHTML = '';
    for (let project of userProjects) {
      let para = document.createElement('p');
      console.log(project.title);
      para.textContent = project.title;
      console.log(para);
      sidebarProjectList.append(para);
    }
  });
}