var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.lastIn = 0;
  this.firstIn = 1;
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.lastIn++;
  this.storage[this.lastIn] = value;
};

Queue.prototype.dequeue = function() {
  if ( this.firstIn <= this.lastIn){
    let temp = this.storage[this.firstIn];
    delete this.storage[this.firstIn];
    this.firstIn++;
    return temp;
  }
};