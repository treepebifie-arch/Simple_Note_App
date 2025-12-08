# Simple_Note_App
This project is a simple note taker, that comes in handy for keeping records of your day to day activities, to-do list etc. It has a pinned option to easily access important notes, and a simple lock for confidential purposes. It is built to manage simple CRUD operations, using expressjs, mongoDB for data storage and Morgan for request logging and debugging.

# Technologies Used
Runtime environment: Node.js
Framework: Express.js
Database: MongoDB
Middleware: Morgan

# FolderStructure
The folder structure is based on the MVC architecture, which helps to keep the code organized, and to make debugging easier.

```text
Simple_Note_App
├── .gitignore          // Specifies files/folders Git should ignore.
├── package.json        // contains all dependencies used in this project.
├── index.js           // The main entry point and Express application setup.
├── README.md           // Brief description of the project and how to run it. 
└── src/
    ├── models/         // Database Schemas
    ├── routes/         // Defines all CRUD routes for the Notes.
    ├── config/         // Database connection.
    └── controllers/    // Holds business logic functions
