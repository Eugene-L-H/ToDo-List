export const createMobileMenu = () => {
  const mobileMenu = document.createElement('div');
  mobileMenu.classList.add('mobileMenu');

  const addProject = document.createElement('p');
  addProject.classList.add('addProject');
  addProject.textContent = '+ Add Project';

  const viewProjects = document.createElement('p');
  viewProjects.classList.add('viewProjects');
  viewProjects.textContent = 'View Projects';

  mobileMenu.append(addProject);

  return mobileMenu;
}

