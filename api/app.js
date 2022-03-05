const express = require('express');
const cors = require('cors');

//Router
const { todosRouter } = require('./routes/todos.routes');
//Utils
const { sequelize } = require('./utils/database');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/todos', todosRouter);

sequelize
    .authenticate()
    .then(() => console.log('Database authenticated'))
    .catch((err) => console.log(err));

sequelize
    .sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err));

app.listen(3001, () => {
    console.log('Express app runing');
});

// Create server Express (DONE)

// Define endpoint for ToDos (DONE)
// GET fetch all ToDos (DONE)
// POST Create new ToDo (DONE)
// PATCH Update ToDo given an ID (DONE)
// DELETE Delete ToDo given an ID (destroy or soft delete) (DONE)

// Establish a connection with a Database (Postgress) (DONE)

// Create ToDo model (DONE)
// Use the model to interact with the controller functions (DONE)

// Must structure project with routes, controllers and models folders (utils) (DONE)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)(DONE)
// app.use(cors())(DONE)
