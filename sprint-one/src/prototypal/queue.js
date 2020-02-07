var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.lastIn = 0;
  instance.nextUp = 1;
  return instance;
};

var queueMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },

  enqueue: function(value) {
    this.lastIn++;
    this.storage[this.lastIn] = value;
  },

  dequeue: function() {
    if ( this.nextUp <= this.lastIn){
      let temp = this.storage[this.nextUp];
      delete this.storage[this.nextUp];
      this.nextUp++;
      return temp;
    }
  }
};
