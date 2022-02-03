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

export const displayProjectInTaskArea = (displayTitle, userProjectsMain) => {
  const projectDiv = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = displayTitle;

  const taskList = document.createElement('ul');
  console.log(userProjectsMain[displayTitle]);

  let projectTaskList = document.createElement('ul');
  for (let task of userProjectsMain[displayTitle].tasks) {
    let listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.append(listItem);
  }

  const currentProject = userProjectsMain[title];

  projectDiv.append(title);
  projectDiv.append(taskList);
  return projectDiv;
}

export const addPopupFunctionality = (
  blurScreen,
  popupContainer,
  ProjectObj,
  userProjectsMain,
  tasksArea
  ) => {
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
    userProjectsMain[projectName.value] = newProject;

    // Populate project list in sidebar

    let para = document.createElement('li');
    // para.setAttribute('value', project.title);
    para.textContent = newProject.title;

    para.addEventListener('click', (e) => {
      tasksArea.innerHTML = '';
      const displayTitle = e.target.textContent;
      tasksArea.append(displayProjectInTaskArea(displayTitle, userProjectsMain,));
    });

    sidebarProjectList.append(para);
    
    blurScreen.classList.toggle('hide');
    popupContainer.classList.toggle('hide');
    document.querySelector('.inputProjectName').value = '';
  });
}