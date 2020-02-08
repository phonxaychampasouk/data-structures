var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.currentNode = null;

  //add to end of list
  list.addToTail = function(value) {

    list.currentNode = Node(value);

    if (list.head === null) {
      list.head = list.currentNode;
    } else {
      list.head.next = Node(value);
    }

    list.tail = list.currentNode;
  };


  //remove node that head points to
  list.removeHead = function() {
    var toBeDeleted = list.head.value;
    list.head = list.head.next;
    delete toBeDeleted;
    return toBeDeleted;
  };

  //does list contain the target
  list.contains = function(target) {
    if ( list.head.value === target || list.tail.value === target ) {
      return true;
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