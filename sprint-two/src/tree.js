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

 var result = false;

if ( this.value === target) {
   return true;
 }

 for (var i = 0; i < this.children.length; i++) {
   result = this.children[i].contains(target);
   if (result) {
     return result;
   }
 }
 return false;
}

// step one: create root node which, later on in code will check to see if same value is in tree

/*
 * Complexity: What is the time complexity of the above functions?
 */
