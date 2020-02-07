var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.lastObj = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
 return Object.keys(this.storage).length;
};

Stack.prototype.push = function(value) {
 this.lastObj++;
 this.storage[this.lastObj] = value;
};

Stack.prototype.pop = function() {
  let temp = this.storage[this.lastObj];
  delete this.storage[this.lastObj];
  this.lastObj--;
  return temp;
};