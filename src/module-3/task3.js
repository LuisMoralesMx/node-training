/*
Name: Luis Morales
Date: Friday 30, 2023

To run this file type: ../../node_modules/nodemon/bin/nodemon.js task3
*/

let CvsToJson = require('./utils/cvs-to-json.js');
let cvsToJson = new CvsToJson();

cvsToJson.parseCvsToJson('../assets/random-data.csv', '../assets/output.json');
