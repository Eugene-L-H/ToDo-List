export class ProjectObj {
  constructor(title) {
    this.title = title;
  }
  tasks = [];
}

export class TaskObj {
  constructor(name, dueDate, time, notes, priority) {
    this.name = name;
    this.dueDate = dueDate; 
    this.time = time;
    this.notes = notes;
    this.priority = priority;
  }
}
