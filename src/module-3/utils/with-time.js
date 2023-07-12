/*
Name: Luis Morales
Date: Friday 30, 2023
*/

const CustomEventEmitter = require('./custom-event-emitter.js');

class WithTime extends CustomEventEmitter {
  async fetchCall() {
    try {
      this.emit('begin', (data) => console.log(data));
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      console.log(data);
      this.emit('end', (data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = WithTime;