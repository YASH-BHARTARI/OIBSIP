// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

// Event Listener to Add Task
addTaskBtn.addEventListener('click', addTask);

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = createTaskItem(taskText);
    pendingTasks.appendChild(taskItem);
    taskInput.value = '';
}

// Create Task Item Function
function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');

    // Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => completeTask(taskItem));

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => editTask(taskItem, taskContent));

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => taskItem.remove());

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskButtons);

    return taskItem;
}

// Complete Task Function
function completeTask(taskItem) {
    taskItem.classList.add('completed');
    taskItem.querySelector('.complete-btn').remove();
    completedTasks.appendChild(taskItem);
}

// Edit Task Function
function editTask(taskItem, taskContent) {
    const newTaskText = prompt('Edit your task:', taskContent.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskContent.textContent = newTaskText.trim();
    }
}
