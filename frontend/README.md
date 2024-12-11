EUROPAY TASK TACKER by Demilade Otunaiya

Liveline: https://europay-task-tracker.vercel.app/

Task Tracker App - Frontend

Welcome to the Task Tracker App frontend! This is a React-based application designed for users to manage their tasks, add new tasks, and track their progress.
Technologies Used

    React
    Material-UI (MUI) for UI components
    TypeScript
    Next.js
    React Context API for state management
    File System for data storage, with data fetching implemented on the server side


Features

    Task Management: Add, edit, and delete tasks.
    Task Status: Toggle between "unfinished" and "done" status for each task.
    Responsive Layout: The app is designed to be responsive across different devices.

Installation

    Clone the repository:

git clone https://github.com/yourusername/task-tracker-frontend.git

Navigate to the project directory:

cd task-tracker-frontend

Install dependencies:

npm install

Run the development server:

    npm run dev

    This will start the app at http://localhost:3000.

Folder Structure

    components/ - Contains reusable UI components such as TodoForm, TodoItem, TodoList.
    context/ - Contains the TodoContext to manage the state of tasks.
    pages/ - Contains the main pages of the app, including the home page and task form page.
    types/ - Contains the interface for the variables in the app.
    utils/ - Contains utility functions for the app.
    services/ - Contains the API service for fetching tasks from the backend.

Usage

    Task List: The main screen displays a list of tasks where users can view and toggle the status of tasks.
    Task Form: The form allows users to add new tasks by providing a content description and a due date (optional).
    Edit Task: Users can click the "Edit" button on a task to modify the task's details.
    Delete Task: Users can click the "Delete" button on a task to remove it from the list.

Customization

    Adjust the styling of components through sx prop or CSS if necessary.