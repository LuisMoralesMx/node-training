/*
Name: Luis Morales
Date: Friday 30, 2023

To run this file type: ../../node_modules/nodemon/bin/nodemon.js task2
*/

let WithTime = require('./utils/with-time.js');
let withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute.'));
withTime.on('end', () => console.log('Done with execute'));
console.log(withTime.rawListeners('end').toString());

withTime.fetchCall();