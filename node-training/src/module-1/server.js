/*
Name: Luis Morales
Date: Thursday 15, 2023

This is the server.js, it is configured to run using express and nodemon has been installed
for real time developmet.

To run the 'getRandomNumber' you have to install all dependencies (npm install) and the in a 
terminal run the following command:

./node_modules/nodemon/bin/nodemon.js server.js 3000

Once the command is run, the server will start and a random number will be generated, since
nodemon is installed, if you change the value of the variable 'limitRandomNumber',
the 'getRandomNumber' function will be run again automatically.
*/

// Express Constants
const express = require('express');
const app = express();
const port = 3000

// Global constants
var limitRandomNumber = 100;

// Functions
function getRandomNumber() {
    var random = Math.floor(Math.random() * limitRandomNumber);
    return random;
}

// Executing functions.
console.log("Your random number is: " + getRandomNumber());

app.listen(port, () => console.log(`Module 1 app listening on port ${port}!`))