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
    if(storage.objTracker > 0)
    {
    delete storage[someInstance.objTracker];
    someInstance.objTracker--;
    }
    else{
      return 0;
    }
  };

  someInstance.size = function(value) {
    if(undefined)
    {
      return 0;
    }
    else{
return someInstance.objTracker

    }

  };

  return someInstance;
};
