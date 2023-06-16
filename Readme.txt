# Todo App

This is a simple Todo application that allows you to manage tasks.

## Features

- Create a new task with a title, description, and status.
- Get a list of all tasks.
- Get a task by its ID.
- Update a task's title, description, and status.
- Delete a task.

## Technologies Used

- Node.js
- Express.js
- TypeScript

## Getting Started

1. Clone the repository:

git clone https://github.com/your-username/todo-app.git

2 - Install dependencies:
cd todo-app
npm install

3 - start server
npx tsc

4 - The server will be running and API Endpoints

POST /tasks - Create a new task
GET /tasks - Get a paginated list of tasks
GET /tasks/:id - Get a task by ID
PUT /tasks/:id - Update a task by ID
DELETE /tasks/:id - Delete a task by ID


ppstman example :
-----------------------------------------------
Create a Task
Request:POST .../tasks
Content-Type: application/json

{
  "title": "Finish project",
  "description": "Complete the remaining tasks for the project",
  "status": "pending"
}
Response : HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "1",
  "title": "Finish project",
  "description": "Complete the remaining tasks for the project",
  "status": "pending"
}
------------------------------------------
get all
Request : GET /tasks/
Resonse : HTTP/1.1 200 OK
Content-Type: application/json
[
{
  "id": "1",
  "title": "Finish project",
  "description": "Complete the remaining tasks for the project",
  "status": "pending"
},
{
  "id": "1",
  "title": "Finish project",
  "description": "Complete the remaining tasks for the project",
  "status": "pending"
},
...
]
--------------------------------------------
get by id :1
Request : GET /tasks/1
Resonse : HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "1",
  "title": "Finish project",
  "description": "Complete the remaining tasks for the project",
  "status": "pending"
}
-------------------------------------------------
update task
Request : PUT .../tasks/1
Content-Type: application/json

{
  "title": "Complete project",
  "status": "completed"
}

Response : HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "1",
  "title": "Complete project",
  "description": "Complete the remaining tasks for the project",
  "status": "completed"
}
-------------------------------------------------------
Delete Task 
Request : DELETE .../tasks/1

Response : HTTP/1.1 200 OK
Content-Type: text/plain

Task is deleted
---------------------------------------------------------------------------------