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

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/
class BinarySearchTree {
    constructor() {
        this.root = null;
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

    removeNode(value) {
        if (value === this.root) {
            // hmmm
            this.root.value = null;
        }
        else {
            this.searchAndDestroy(this.root, value);
        }
    }

    searchAndDestroy(root, value) {
        if (value === root.value) {
            root.value = null;
        }
        if (value < root.value && root.left !== null) {
            if (value === root.left.value) {
                root.left.value = null;
            } else {
                return this.searchAndDestroy(root.left, value);
            }
        } else if (value > root.value && root.right !== null) {
            if (value === root.right.value) {
                root.right.value = null;
            } else {
                return this.searchAndDestroy(root.right, value);
            }
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

    }

    checkIfFull() {

    }

    checkIfBalanced() {

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
let printTree = (val) => {
    console.log(val);
};
btree.traverseDepthFirst_inOrder(printTree);
btree.traverseDepthFirst_preOrder(printTree);
