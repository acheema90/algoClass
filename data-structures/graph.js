/*
GRAPHS

Abstract data type

Basic Graph:
Stores nodes (represented by any primitive value) and the neighbors for each node. This implementation represents a graph as an adjacency list (https://en.wikipedia.org/wiki/Adjacency_list).

Here's an example:
1---2---3
 \ /
  4
graph = {
  1: [2, 4],
  2: [1, 3, 4],
  3: [2],
  4: [1, 2]
}

Constraints:
This graph implementation is undirected and can have unconnected nodes. The nodes are represented by unique primitive values.

*** Operations:
graph.addNode(value) // value must be a primitive
=> undefined
Add node to graph

graph.removeNode(value)
=> undefined
Remove node from graph

graph.contains(value)
=> true/false
Returns true if value is found in graph, false otherwise

graph.addEdge(value1, value2)
=> undefined
Create connection between two nodes if they're both present in the graph

graph.removeEdge(value1, value2)
=> undefined
Remove connection between two nodes

graph.hasEdge(value1, value2)
=> true/false
Returns true if edge exists, false otherwise

graph.forEach(callback)
=> undefined
Traverse the graph and invoke the passed callback once for each node. The callback function receives the following for each node: node value, node Neighbors, all nodes.

Implement traversal methods for depth-first and breadth-first traversal. The methods take a starting node and a callback that gets invoked for each node. The callback should receive two arguments: the node value and the distance (number of edges that separate the node from the starting node). See example usage below.

graph.traverseDepthFirst(value1, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a depth-first fashion.

graph.traverseBreadthFirst(value, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a breadth-first fashion.

Example Usage:
1---2---3---5
 \ /
  4
{
  '1': [ 2, 4 ],
  '2': [ 1, 3, 4 ],
  '3': [ 2, 5 ],
  '4': [ 1, 2 ],
  '5': [ 3 ]
}

var traverseDF = [];
graph.traverseDepthFirst(1, function(val, distance) { traverseDF.push([val, distance]) });
traverseDF should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]

var traverseBF = [];
graph.traverseBreadthFirst(1, function(val, distance) { traverseBF.push([val, distance]) });
traverseBF should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 5, 3 ] ]


*** Additional Exercises:

Given a directed graph and two nodes in the graph, write a function that indicates whether there is a route between the two nodes. Bonus: rather than returning a boolean, have your function return the shortest distance between the two nodes (the number of edges that separate them).

*/


function Graph () {
    this._nodes = {};
}

Graph.prototype.addNode = function(value) {
    if (value === undefined) {
        return;
    }
    this._nodes[value] = this._nodes[value] || [];
};
// Time complexity: O(1)

//remove node from every other node and the nodes object
Graph.prototype.removeNode = function(item) {
    this._nodes[item].forEach((node) => {
        let itemIndex = this._nodes[node].indexOf(item);
        this._nodes[node].splice(itemIndex, 1);
    });
    delete this._nodes[item];
};
// Time complexity: O(n^2)

Graph.prototype.contains = function(value) {
  return this._nodes[value] !== undefined;
};
// Time complexity: O(1)

Graph.prototype.addEdge = function(value1, value2) {
    if (!this._nodes[value1] || !this._nodes[value2]) {
        return 'invalid node value';
    }
    this._nodes[value1].push(value2);
    this._nodes[value2].push(value1);
};
// Time complexity: O(1)

Graph.prototype.removeEdge = function(value1, value2) {
    if (!this._nodes[value1] || !this._nodes[value2]) {
        return 'invalid node value';
    }
    let val1Index = this._nodes[value2].indexOf(value1); // O(n)
    let val2Index = this._nodes[value1].indexOf(value2); // O(n)
    this._nodes[value1].splice(val2Index, 1); // O(n)
    this._nodes[value2].splice(val1Index, 1); // O(n)
};
// Time complexity: O(n)

Graph.prototype.hasEdge = function(value1, value2) {
    return this._nodes[value1].indexOf(value2) !== -1;
};
// Time complexity: O(n). indexOf is O(n)!

Graph.prototype.forEach = function(fn) {
  for (let node in this._nodes) {
      fn(node, this._nodes[node], this._nodes);
  });
};
// Time complexity: at least O(n), depends on what fn does

Graph.prototype.traverseDepthFirst = function(value, fn, visited, distance) {
  // implement me...
};
// Time complexity:

Graph.prototype.traverseBreadthFirst = function(value, fn) {
  // implement me...
};
// Time complexity:
