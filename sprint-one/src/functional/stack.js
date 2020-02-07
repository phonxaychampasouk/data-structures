var Stack = function(arg) {

  var someInstance = {};
  someInstance.objTracker = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  
  // Implement the methods below
  someInstance.push = function(value) {
someInstance.objTracker++;
storage[someInstance.objTracker] = value;

  };

  someInstance.pop = function() {
var tempHold = storage[someInstance.objTracker];
     delete storage[someInstance.objTracker];
    someInstance.objTracker--;
  return tempHold;



  };

  someInstance.size = function(value) {
    if(undefined)
    {
      return 0;
    }
    else if(someInstance.objTracker <=0)
    {
      return 0;
    }
    else
    {
      return someInstance.objTracker;
    }

    };



  return someInstance;
};
