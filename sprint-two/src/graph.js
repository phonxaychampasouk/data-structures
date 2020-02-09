

// Instantiate a new graph
var Graph = function() {
    this.node = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

    var addsNode = Nodes(node);
    this.node = addsNode;
    

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    if(this.node === undefined)
    {
        return false;
    }
    return true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    delete this.node;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
   var oneWayNode = Nodes(fromNode);
    var otherWayNode = Nodes(toNode);
 if(this.node.oneWayNode === oneWayNode && this.node.otherWayNode === otherWayNode)
 {
     return true;
 }
 return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    var edges = this.node.edges;
    for(var i = 0; i<this.node.edges.length; i++)
    {
        if
        (
        edges[i].push(Nodes(fromNode)) &&
        edges[i].push(Nodes(toNode))
        )
        {
            return true;
        }
    }
};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var Nodes =function(value){
    var node = {};
    node.value = value;
    node.edges = [];
    return node;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */


