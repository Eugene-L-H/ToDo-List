export class ProjectObj {
  constructor(title) {
    this.title = title;
  }
  tasks = [];
}

export class TaskObj {
  constructor(name, date, time, description, dueDate, priority) {
    this.name = name;
  }
}

export const Projects = {
  'registeredProjects': []
}