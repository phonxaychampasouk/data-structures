var Queue = function()
{

  var someInstance = {};
   someInstance.firstIn = 0;
   someInstance.lastIn = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
storage[someInstance.lastIn++];
storage[someInstance.lastIn] = value;
  };
debugger;
  someInstance.dequeue = function() {
    var tempHold = storage[someInstance.firstIn];
   delete storage[someInstance.firstIn];
   someInstance.firstIn++;

   someInstance.lastIn--;

    return tempHold;

  };

  someInstance.size = function() {

 if(someInstance.lastIn <= 0)
 {
   return 0;
 }
 else
 {
   return someInstance.lastIn;
 }
  };

  return someInstance;
};

