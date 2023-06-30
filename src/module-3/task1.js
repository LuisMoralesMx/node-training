/*
Name: Luis Morales
Date: Friday 30, 2023

To run this file type: ../../node_modules/nodemon/bin/nodemon.js task1
*/

let CustomEventEmitter = require('./utils/custom-event-emitter.js');
let customEmitter = new CustomEventEmitter();

function c1() {
  console.log("an event occurred!");
}

function c2() {
  console.log("yet another event occurred!");
}

customEmitter.on("eventOne", c1); // Register for eventOne
customEmitter.on("eventOne", c2); // Register for eventOne

// Register eventOnce for one time execution
customEmitter.once("eventOnce", () => console.log("eventOnce once fired"));
customEmitter.once("init", () => console.log("init once fired"));

// Register for 'status' event with parameters
customEmitter.on("status", (code, msg) => console.log(`Got ${code} and ${msg}`));

customEmitter.emit("eventOne");

// Emit 'eventOnce' -> After this the eventOnce will be
// removed/unregistered automatically
customEmitter.emit("eventOnce");

customEmitter.emit("eventOne");
customEmitter.emit("init");
customEmitter.emit("init"); // Will not be fired
customEmitter.emit("eventOne");
customEmitter.emit("status", 200, "ok");

// Get listener's count
console.log(customEmitter.listenerCount("eventOne"));

// Get array of rawListeners//
// Event registered with 'once()' will not be available here after the
// emit has been called
console.log(customEmitter.rawListeners("eventOne"));

// Get listener's count after remove one or all listeners of 'eventOne'
customEmitter.off("eventOne", c1);
console.log(customEmitter.listenerCount("eventOne"));
customEmitter.off("eventOne", c2);
console.log(customEmitter.listenerCount("eventOne"));
