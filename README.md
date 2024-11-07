# task-manager-javascirpt

## Overview

The Task Manager Web App is a simple web-based application designed for managing personal tasks. It allows users to:

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as complete or incomplete.

The app uses local storage to persist task data across page reloads, making sure users don't lose their tasks. It employs core **JavaScript** features such as **DOM manipulation, array methods, and event delegation to interact with the web page dynamically.

---

## Features

- Add Tasks: Users can add new tasks with a title and description.
- Edit Tasks: Users can edit the title and description of existing tasks.
- Delete Tasks: Users can remove tasks from the task list.
- Mark Tasks as Complete: Tasks can be marked as complete, and their state is saved in local storage.
- Persistent Storage: Tasks are stored in the browser’s **localStorage**, so they persist across page reloads.

---

## Key Concepts

### 1. Local Storage
The app utilizes the browser’s `localStorage` to save tasks. This allows the tasks to remain even after a page reload.

### 2. DOM Manipulation
JavaScript is used to dynamically update the DOM. The task list is updated based on user interactions (adding, editing, or deleting tasks).

### 3. Event Delegation
To optimize performance, event delegation is used. Instead of attaching individual event listeners to each task, an event listener is attached to a parent element and listens for events on child elements.

### 4. Array Methods
Array methods like `map()`, `filter()`, and `forEach()` are used to manage tasks in the data array. These methods help update the task list efficiently.

---

## Installation Instructions

### 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/mr-adinarayan/task-manager-javascirpt.git

#Don't need to read the above things 

# Navigate to your project folder
cd path/to/task-manager-javascirpt

# Check for changes
git status

# Stage all changes
git add .

# Commit the changes
git commit -m "Fixed issue with marking tasks as complete"

# Push changes to your forked repository (assume you're working on the main branch)
git push origin main

