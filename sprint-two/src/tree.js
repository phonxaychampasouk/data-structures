var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  if(newTree.value === undefined){
  newTree.value = value;
  }
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
 this.children.push(Tree(value));
};

treeMethods.contains = function(target) {


 return this.children.includes(target);

};

// step one: create root node which, later on in code will check to see if same value is in tree

/*
 * Complexity: What is the time complexity of the above functions?
 */
