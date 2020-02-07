var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.lastObj = 0;
  return instance;
};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },

  push: function(value) {
    this.lastObj++;
    this.storage[this.lastObj] = value;
  },

  pop: function() {
    let temp = this.storage[this.lastObj];
    delete this.storage[this.lastObj];
    this.lastObj--;
    return temp;
  }
};