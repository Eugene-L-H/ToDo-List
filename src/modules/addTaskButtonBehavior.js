export const createAddTaskForm = () => {
  const addTaskForm = document.createElement('div');
  addTaskForm.classList.add('addTaskPopup');

  const form = document.createElement('form');
  form.setAttribute('id', 'task_form')

  const title = document.createElement('p');
  title.classList.add('popupTitle');
  title.textContent = 'Create a Task:';

  const name = document.createElement('input');
  name.setAttribute('id', 'task_name');
  name.setAttribute('placeholder', 'task name');

  const date = document.createElement('input');
  date.setAttribute('id', 'task_date');
  date.setAttribute('type', 'date');

  const timeLabel = document.createElement('label');
  timeLabel.setAttribute('for', 'task_time');
  timeLabel.textContent = 'Time of task: ';

  const time = document.createElement('input');
  time.setAttribute('id', 'task_time');
  time.setAttribute('type', 'time')

  const notes = document.createElement('input');
  notes.setAttribute('type', 'textarea');
  notes.setAttribute('id', 'task_notes');
  notes.setAttribute('placeholder', 'Task notes');

  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'task_priority');
  priorityLabel.textContent = 'Priority: '

  const priority = document.createElement('input');
  priority.setAttribute('type', 'number');
  priority.setAttribute('id', 'task_priority');

  form.append(title);
  form.append(name);
  form.append(date);
  form.append(timeLabel);
  form.append(time);
  form.append(notes);
  form.append(priorityLabel);
  form.append(priority);

  addTaskForm.append(form);

  return addTaskForm;
}

export const addTaskButtonBehavior = () => {
  
}