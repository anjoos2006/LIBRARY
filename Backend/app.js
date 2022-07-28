const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const  cors = require('cors');



const app = express();


// Import Routes
const booksRoute = require('./routes/books');

// Middleware
app.use(bodyParser.json());
app.use('/books',booksRoute);
app.use(cors());


// Connect to DB
mongoose.connect(process.env.dbUrl, { useNewUrlParser: true }, () => { 
    console.log("Connected to DB")
});

app.listen(3000)