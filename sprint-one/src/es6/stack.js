class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.lastIn = 0;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  push(value) {
    this.lastIn++;
    this.storage[this.lastIn] = value;
  }

  pop() {
    var temp = this.storage[this.lastIn];
    delete this.storage[this.lastIn];
    this.lastIn--;
    return temp;
  }
}