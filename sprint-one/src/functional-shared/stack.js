var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.objTracker = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

  size: function() {
    return Object.keys(this.storage).length;
  },

  push: function(value) {
    this.objTracker++;
    this.storage[this.objTracker] = value;
  },

  pop: function() {
    let result = this.storage[this.objTracker];
    delete this.storage[this.objTracker];
    this.objTracker--;
    return result;
  }

};