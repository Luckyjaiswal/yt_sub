// This code sets up a server using Express.js and connects it to a MongoDB database using Mongoose.

// Importing necessary modules
const express = require("express"); // Importing Express module
const app = require("./src/app"); // Importing custom app module
const mongoose = require("mongoose"); // Importing Mongoose module
const port = process.env.port || 4001; // Setting the port number

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json()); // Parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies

// Connecting to the database
const DATABASE_URL =
 "mongodb+srv://ojhaparth:test123@cluster0.9xedsar.mongodb.net/"
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(DATABASE_URL,connectionParams)
.then( () => {
    console.log('Connected to database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})

const db = mongoose.connection;
  // Logging successful database connection

// Starting the server
app.listen(port, () => console.log(`App listening on port ${port}!`)); // Logging the server start and listening on the specified port
