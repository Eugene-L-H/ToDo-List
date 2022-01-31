export class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

export class Task {
  constructor(name, date, time, description, dueDate, priority) {
    this.name = name;
  }
}

export const Projects = (() => {
  let projectList = [];
})();