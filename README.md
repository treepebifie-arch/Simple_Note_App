## Simple_Note_App
This project is a simple note taker, that comes in handy for keeping records of your day to day activities, to-do list etc. It has a pinned option to easily access important notes, and a simple lock for confidential purposes. It is built to manage simple CRUD operations, using expressjs, mongoDB for data storage and Morgan for request logging and debugging.

## Technologies Used
Runtime environment: Node.js   

Framework: Express.js. 

Database: MongoDB

Middleware: Morgan

## Folder Structure
The folder structure is based on the MVC architecture, which helps to keep the code organized, and to make debugging easier.


```text
Simple_Note_App
├── .gitignore      // Specifies files/folders Git should ignore.
├── package.json    // contains all dependencies used in this project.
├── index.js        // The main entry point and Express application setup.
├── README.md       // Brief description of the project and how to run it. 
├── models/         // Database Schemas
├── routes/         // Defines all CRUD routes for the Notes.
├── config/         // Database connection.
└── controllers/    // Holds business logic functions

```

## How to run Locally 
* Clone this Repository
* Install all Dependencies listed in the package.json file
* Create the required .env file that will contain your mongoDB connection URI and port.

* Start the Server using 'node index.js' or 'npm run dev' for nodemon to automatically run the server. 

The server will run on http://localhost: (the port specified in your .env).

* You can now test the CRUD endpoints using thubder client,  interacting with the database via the /api/notes route.

## API ENDPOINTS 

| Method | Endpoint | Description | 
| :--- | :--- | :--- | 
| **GET** | `/api/notes/all-notes` | Retrieves all notes. |
| **GET** | `/api/notes/find-notes/:id` | Retrieves a single note by ID. |
| **GET** | `/api/notes/seacrh-notes/` | Search notes by title. |
| **POST** | `/api/notes/new-notes` | Creates a new note. |
| **PUT** | `/api/notes/edit-notes/:id` | Updates an existing note. | 
| **DELETE** | `/api/notes/delete-notes/:id` | Deletes a note by ID. |
| **DELETE** | `/api/notes/delete-notes`| Deletes a note by title. |



