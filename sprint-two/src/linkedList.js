var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  //add to end of list
  list.addToTail = function(value) {
    
  list.tail = Node(value);



  };

  //remove node that head point to
  list.removeHead = function() {
  };

  //does list contain the target
  list.contains = function(target) {
    for (var key in list) {
      if ( key === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

//add node to end of current list
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
