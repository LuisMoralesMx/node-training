/*
Name: Luis Morales
Date: Thursday 15, 2023

This is the index.js, you can run it via REPL, in order to do that follow the next
steps:

    1) Go to the root directory (/node-training/module-1)
	2) Type: node
	3) Type: .load index.js
	4) Output will be generated in console.
	5) (Optional) set a new limit number by typing: limitRandomNumber = 500
	6) Type: getRandomNumber() to generate new numbers.
*/

// Global constants
var limitRandomNumber = 100;

// Functions
function getRandomNumber() {
    var random = Math.floor(Math.random() * limitRandomNumber);
    return random;
}