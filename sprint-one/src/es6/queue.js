class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.nextUp = 1;
    this.lastIn = 0;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    this.lastIn++;
    this.storage[this.lastIn] = value;
  }

  dequeue() {
    if(this.nextUp <= this.lastIn){
      var temp = this.storage[this.nextUp];
      delete this.storage[this.nextUp];
      this.nextUp++;
      return temp;
    }
  }
}