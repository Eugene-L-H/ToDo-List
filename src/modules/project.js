export class ProjectObj {
  constructor(title) {
    this.title = title;
  }
  tasks = [1, 2, 3];
}

export class TaskObj {
  constructor(name, date, time, description, dueDate, priority) {
    this.name = name;
  }
}
