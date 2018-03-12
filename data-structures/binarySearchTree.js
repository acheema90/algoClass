/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.

*/
class BinarySearchTree {
    constructor() {
        this.root = null;
        this.full = true;
    }

    createNode (value) {
        return {
            value: value,
            left: null,
            right: null
        };
    }

    insert(value) {
        var node = this.createNode(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else if (node.value > root.value) {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    contains(value) {
        if (value === this.root) {
            return true;
        } else {
            return this.search(this.root, value);
        }
    }

    search(root, value) {
        if (value === root.value) {
            return true;
        }
        if (value < root.value && root.left !== null) {
            if (value === root.left.value) {
                return true;
            } else {
                return this.search(root.left, value);
            }
        } else if (value > root.value && root.right !== null) {
            if (value === root.right.value) {
                return true;
            } else {
                return this.search(root.right, value);
            }
        }
        return false;
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
        // base case
        if (node === null) {
            return null;
        }
        // recursive cases
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        }
        // base case: value === node.value
        else {
            // case 1: leaf node
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // case 2: a node with 1 child
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // case 3: a node with both children
            let aux = this.minNode(node.right);
            node.value = aux.value;
            node.right = this.removeNode(node.right, aux.value);
            return node;
        }
    }

    traverseDepthFirst_inOrder(cb) {
        this.inOrderTraverse(this.root, cb);
    }

    inOrderTraverse(root, cb) {
        if (root.left !== null) {
            this.inOrderTraverse(root.left, cb);
        }
        cb(root.value);
        if (root.right !== null) {
            this.inOrderTraverse(root.right, cb);
        }
    }

    traverseDepthFirst_preOrder(cb) {
        this.preOrderTraverse(this.root, cb);
    }

    preOrderTraverse(root, cb) {
        cb(root.value);
        if (root.left !== null) {
            this.preOrderTraverse(root.left, cb);
        }
        if (root.right !== null) {
            this.preOrderTraverse(root.right, cb);
        }
    }

    traverseDepthFirst_postOrder(cb) {
        this.postOrderTraverse(this.root, cb);
    }

    postOrderTraverse(root, cb) {
        if (root.left !== null) {
            this.postOrderTraverse(root.left, cb);
        }
        if (root.right !== null) {
            this.postOrderTraverse(root.right, cb);
        }
        cb(root.value);
    }

    minNode(node = this.root) {
        if(node && node.left!==null) {
            return this.minNode(node.left);
        }
        return node;
    }

    maxNode(node = this.root) {
        if(node && node.right!==null) {
            return this.maxNode(node.right);
        }
        return node;
    }

    // a binary tree is full if every node has either 0 or 2 children
    checkIfFull() {
        this.traverseDepthFirst_inOrder(this.checkFull.bind(this));
        return this.full;
    }

    checkFull(node) {
        if ((node.left !== null && node.right === null) ||
            (node.left===null && node.right!==null)) {
            this.full = false;
        }
    }

    // a tree is balanced if the min height and the max height differ by no more than 1
    // the height for a branch is the number of levels below the root
    checkIfBalanced() {
        let heights = [];
        let recurse = function(node, height) {
            if (!node.left && !node.right) {
                return heights.push(height);
            }
            node.left && recurse(node.left, height+1);
            node.right && recurse(node.right, height+1);
        };
        recurse(this, 1);
        let min = Math.min.apply(null, heights);
        let max = Math.max.apply(null, heights);
        return max-min <= 1;
    }
}

let btree = new BinarySearchTree();
btree.insert(11);
btree.insert(7);
btree.insert(15);
btree.insert(5);
btree.insert(9);
btree.insert(13);
btree.insert(20);
btree.insert(3);
btree.insert(6);
btree.insert(8);
btree.insert(10);
btree.insert(12);
btree.insert(14);
btree.insert(18);
btree.insert(25);
console.log(btree);
btree.minNode();
btree.maxNode();
let printTree = (val) => {
    console.log(val);
};
btree.traverseDepthFirst_inOrder(printTree);
btree.traverseDepthFirst_preOrder(printTree);
btree.traverseDepthFirst_postOrder(printTree);
btree.checkIfFull();
btree.remove(5);
btree.checkIfFull();
