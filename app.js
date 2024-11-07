// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = ''; // Clear current tasks
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('flex', 'items-center', 'justify-between', 'p-2', 'bg-gray-100', 'rounded-lg', 'shadow-sm');
    
    taskItem.innerHTML = `
      <span class="flex-1 ${task.completed ? 'line-through text-gray-400' : ''}" onclick="toggleComplete(${index})">${task.text}</span>
      <div class="space-x-2">
        <button onclick="editTask(${index})" class="text-blue-500 hover:text-blue-700">Edit</button>
        <button onclick="deleteTask(${index})" class="text-red-500 hover:text-red-700">Delete</button>
      </div>
    `;
    
    taskList.appendChild(taskItem);
  });
};

// Save tasks to local storage
const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText, completed: false });
    saveTasks(tasks);
    taskInput.value = '';
    loadTasks();
  }
});

// Toggle task completion
const toggleComplete = (index) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  loadTasks();
};

// Edit task
const editTask = (index) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText) {
    tasks[index].text = newText;
    saveTasks(tasks);
    loadTasks();
  }
};

// Delete task
const deleteTask = (index) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);
  saveTasks(tasks);
  loadTasks();
};

// Initial load
loadTasks();
