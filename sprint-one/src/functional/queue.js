var Queue = function()
{

  var someInstance = {};
   var firstIn = 1;
  var lastIn = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
storage[lastIn++];
storage[lastIn] = value;
debugger;
  };

  someInstance.dequeue = function() {
    var tempHold = storage[firstIn];
   delete storage[firstIn];
   firstIn++;
    return tempHold;




  };

  someInstance.size = function() {


 return Object.keys(storage).length;

};
return someInstance;
};

