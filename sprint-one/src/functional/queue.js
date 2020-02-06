var Queue = function()
{
  var someInstance = {};
   someInstance.nextUp = 0;
   someInstance.lastIn = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
someInstance.nextUp++;
someInstance.lastIn++;
storage[someInstance.nextUp] = value;
  };

  someInstance.dequeue = function() {
    var tempHold = storage[someInstance.nextUp];
    delete storage[someInstance.nextUp];
    tempHold = storage[someInstance.nextUp];


    return tempHold;

  };

  someInstance.size = function() {
 if(someInstance.nextUp <= 0)
 {
   return 0;
 }
 else
 {
   return someInstance.nextUp;
 }
  };

  return someInstance;
};

