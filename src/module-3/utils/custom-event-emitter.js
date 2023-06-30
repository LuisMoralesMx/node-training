/*
Name: Luis Morales
Date: Friday 30, 2023
*/

class CustomEventEmitter {
  customListeners = {};

  addListener(eventName, fn) {
    this.customListeners[eventName] = this.customListeners[eventName] || [];
    this.customListeners[eventName].push(fn);
    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  once(eventName, fn) {
    this.customListeners[eventName] = this.customListeners[eventName] || [];
    const onceContainer = () => {
      fn();
      this.off(eventName, onceContainer);
    };
    this.customListeners[eventName].push(onceContainer);
    return this;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    let listener = this.customListeners[eventName];
    if (!listener) return this;
    for (let i = listener.length; i > 0; i--) {
      if (listener[i] === fn) {
        listener.splice(i, 1);
        break;
      }
    }
    return this;
  }

  emit(eventName, ...args) {
    let fns = this.customListeners[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
  }

  listenerCount(eventName) {
    let fns = this.customListeners[eventName] || [];
    return fns.length;
  }

  rawListeners(eventName) {
    return this.customListeners[eventName];
  }
}

module.exports = CustomEventEmitter;