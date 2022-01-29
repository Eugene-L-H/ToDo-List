export const addProjectPopup = () => {
  let popup = document.createElement('div');
  popup.classList.add('projectPopup');

  let title = document.createElement('p');
  title.classList.add('popupTitle');
  title.textContent = 'Add a Project:';

  let projectName = document.createElement('input');
  projectName.classList.add('inputProjectName');
  projectName.setAttribute('name', 'inputProjectName');
  projectName.setAttribute('placeholder', 'Project Name')

  let cancel = document.createElement('input');
  cancel.classList.add('popupCancel');
  cancel.setAttribute('type', 'button');
  cancel.setAttribute('value', 'Cancel');


  let addBtn = document.createElement('input');
  addBtn.classList.add('popupAdd');
  addBtn.setAttribute('type', 'button');
  addBtn.setAttribute('value', 'Add');

  let buttonContaier = document.createElement('div');
  buttonContaier.classList.add('buttonContainer');
  buttonContaier.append(cancel);
  buttonContaier.append(addBtn);

  popup.append(title);
  popup.append(projectName);
  popup.append(buttonContaier);

  return popup;
}

export const addPopupListenters = (input, cancel, add) => {
    cancel.addEventListener('click', () => {
    blurScreen.classList.toggle('hide');
  });
}