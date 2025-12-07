const express = require ('express');
const mongoose = require ('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv')
const db = require('./config/db');
const noteRoutes = require ('./routes/user.route')
const app = express ();
dotenv.config();

const port = process.env.PORT || 6000;

app.use(express.json());
app.use (morgan('dev'))

app.use('/api/notes', noteRoutes)

// Home route
app.get ('/', (req, res) => {
    res.send ('home')
});



app.listen (port, () => {
    db ();
    console.log (`This app is running at http://localhost:${port}`)
});