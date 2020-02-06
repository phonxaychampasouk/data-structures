var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.nextUp = 1;
  someInstance.lastIn = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
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
