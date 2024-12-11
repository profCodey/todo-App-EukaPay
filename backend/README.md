EUROPAY TASK TRACKER by Demilade Otunaiya
Task Tracker App - Backend

This is the Task Tracker App backend, built with Node.js and Express. The backend handles API requests, manages tasks data, and provides authentication if needed.
Technologies Used

    Node.js
    Express
    dotenv for environment variable management
    File System for data storage
    UUID for generating unique task IDs

Features

    Task CRUD Operations: Create, Read, Update, and Delete tasks from the MongoDB database.
    User Authentication: (Optional) User registration and login to manage personal tasks.
    Task Status: Toggle between "unfinished" and "done" status for each task.

Installation

    Clone the repository:

git clone https://github.com/profCodey/todo-App-EukaPay.git

Navigate to the project directory:

cd task-tracker-backend

Install dependencies:

npm install

Start the server:

    npm run dev

    This will start the backend server at http://localhost:5000.

API Endpoints

    GET /tasks - Fetch all tasks.
    POST /tasks - Create a new task.
    PUT /tasks/:id - Update an existing task.
    DELETE /tasks/:id - Delete a task.
    GET /tasks/:id - Fetch a single task by its ID.

Folder Structure

    controllers/ - Contains the logic for handling requests and interacting with the database.
    models/ - Contains the Mongoose models, including the Task model.
    routes/ - Contains the routes that correspond to API endpoints.
    middleware/ - Contains middleware functions, such as authentication checks.
    config/ - Contains configuration files, including database and environment variable setup.

Database Setup

This application uses a JSON file for data storage
The tasks data is stored in a local tasks.json file within the backend project directory. This JSON file acts as a simple storage mechanism.
No database setup is required. Just ensure the tasks.json file is available in the backend directory.

Customization

    You can change the JWT secret, port, or other settings in the .env file.
    Adjust the routes, models, and controllers as needed to fit the application's requirements
