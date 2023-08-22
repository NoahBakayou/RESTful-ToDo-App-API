# RESTfulToDo :clipboard:

Welcome to RESTfulToDo, a simple web application to manage your to-do list! Keep track of your tasks and mark them as completed when you're done. :rocket:

## Table of Contents

- [Introduction](#restfultodo-clipboard)
- [Features](#features-star)
- [Getting Started](#getting-started-wrench)
  - [Prerequisites](#prerequisites-exclamation)
  - [Installing and Setting Up XAMPP](#installing-and-setting-up-xampp)
  - [Setting Up the MySQL Database](#setting-up-the-mysql-database)
  - [Running the Frontend and Backend](#running-the-frontend-and-backend)
- [Usage](#usage-hammer_and_wrench)
- [Contributing](#contributing-handshake)
- [License](#license-page_facing_up)

## Features :star:

📋 Here are the features of RESTfulToDo:

- Add new tasks to your to-do list.
- Mark tasks as completed.
- Delete individual tasks.

## Getting Started :wrench:

🚀 To get started with RESTfulToDo, follow these steps:

### Prerequisites :exclamation:

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- XAMPP: [Download and Install XAMPP](https://www.apachefriends.org/index.html)

### Installing and Setting Up XAMPP

1. Install XAMPP following the instructions on the official website.

### Setting Up the MySQL Database

1. Open XAMPP Control Panel.
2. Start the Apache and MySQL services.
3. In your web browser, go to `http://localhost/phpmyadmin/`.
4. Create a new database named `todolist`.

5. Create the "animals" table by running the following SQL command:

   ```sql
   CREATE TABLE animals (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     status VARCHAR(255) NOT NULL,
     date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
Running the Frontend and Backend
Clone the repository:

git clone https://github.com/NoahBakayou/RESTfulToDo.git
cd RESTfulToDo/frontend
Install frontend dependencies:

npm install
Run the frontend:

npm run dev
Access the app at http://localhost:3000.

Open a new terminal window and navigate to the backend folder:


cd ../backend
Install backend dependencies:

npm install
Run the backend:

node app.js
The backend will be running at http://localhost:3001.

Usage :hammer_and_wrench:
📝 To use RESTfulToDo:

Open your web browser and navigate to http://localhost:3000.
Enter the task in the input field.
Click the "Add" button to add the task to your list.
Existing tasks are displayed along with checkboxes to mark them as completed.
To delete a task, click the "Delete" button next to it.

Contributing :handshake:

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or a pull request.

License :page_facing_up: 
This project is licensed under the MIT License.
