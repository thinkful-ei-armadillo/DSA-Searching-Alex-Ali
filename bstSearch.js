class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //BigO notation: Average case: O(log(n)), worse case (unbalanced tree): O(n)
    //Best case: O(1), empty tree
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      /* If the tree already exists, then start at the root, 
         and compare it to the key you want to insert.
         If the new key is less than the node's key 
         then the new node needs to live in the left-hand branch */
      /* If the existing node does not have a left child, 
             meaning that if the `left` pointer is empty, 
             then we can just instantiate and insert the new node 
             as the left child of that node, passing `this` as the parent */
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        /* If the node has an existing left child, 
             then we recursively call the `insert` method 
             so the node is added further down the tree */
        //key > this.key
        this.left.insert(key, value);
      }
    }
    // Similarly, if the new key is greater than the node's key
    //  then you do the same thing, but on the right-hand side
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  find(key) {
    //BigO notation: Best: O(1) root key === key Average: O(log(n)) don't have to search
    //all the data Worst: O(n), very unbalanced tree
    //check if this.key === key
    // If the item is found at the root then return that value
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      /* If the item you are looking for is less than the root 
         then follow the left child.
         If there is an existing left child, 
         then recursively check its left and/or right child
         until you find the item */
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      /* If the item you are looking for is greater than the root 
         then follow the right child.
         If there is an existing right child, 
         then recursively check its left and/or right child
         until you find the item */
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error("Key Error");
    }
  }
  remove(key) {
    // BigO notation: Best Case: O(1) - the node is the root
    // Average case: O(log(n)) b/c we are dealing w/ BST. Worst Case O(n): We have a very uneven BST
    //3 scenarios: No children, 1 child, 2 children
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        /* If the node only has a left child, 
             then you replace the node with its left child */
        this._replaceWith(this.left);
      } else if (this.right) {
        /* And similarly if the node only has a right child 
             then you replace it with its right child */
        this._replaceWith(this.right);
      } else {
        /* If the node has no children then
             simply remove it and any references to it 
             by calling "this._replaceWith(null)" */
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

// What does this program do?
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}
// Answer: Adds up all of the node values of a given tree

// Height of a BST
function heightOfBST(bst) {
  let leftHeight = 0;
  let rightHeight = 0;
  if (!bst) {
    return 0;
  } else {
    leftHeight = heightOfBST(bst.left);
    rightHeight = heightOfBST(bst.right);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }
}

// Is it a BST?
function isBst(bst) {
  if (!bst.key) {
    return false;
  }
  if (bst.left) {
    // check to see if the values to the left are less than root
    if (bst.left.key > bst.key) {
      return false;
    } else {
      return isBst(bst.left);
    }
  }
  // check to see if the values to the right are less than root
  if (bst.right) {
    if (bst.right.key < bst.key) {
      return false;
    } else {
      return isBst(bst.right);
    }
  }
  // check for 2 children
  if (bst.right && bst.left) {
    isBst(bst.right);
    isBst(bst.left);
  }
  // check for end of the tree
  if (!bst.right && !bst.left) {
    return true;
  }
}

// 3rd largest node

function treeValues(bst) {
  // do we have to sort the keys in order and subtract length by 3?
  // helper function with a generic amt that could be given
  let resultsString = "";
  if (!bst) {
    return "";
  } else {
    resultsString +=
      `${bst.value}_` + treeValues(bst.left) + treeValues(bst.right);
  }
  return resultsString;
}

function thirdLargest(str) {
  let results = [];
  let arr = str.split("_");
  for (let i = 0; i < arr.length - 1; i++) {
    results.push(arr[i]);
  }
  return results.sort()[results.length - 3];
}

// alternative third largest
// Write an algorithm to find the third largest value in a binary search tree

function nth_largest(tree, state) {
  //Finding the largest node means traversing the right first.
  if (tree.right) {
    nth_largest(tree.right, state);
    if (state.result) return;
  }
  if (!--state.n) {
    //Found it.
    state.result = tree.key;
    return;
  }
  if (tree.left) nth_largest(tree.left, state);
}

function third_largest(tree) {
  //Special case: empty tree.
  if (tree.key == null) return null;
  let state = { n: 3, result: null };
  nth_largest(tree, state);
  return state.result;
}

// Balanced BST

function balanced(bst) {
  let leftHeight = heightOfBST(bst.left);
  let rightHeight = heightOfBST(bst.right);

  if (Math.abs(rightHeight - leftHeight) <= 1) {
    return true;
  } else if (Math.abs(rightHeight - leftHeight) > 1) {
    return false;
  }
}

// Are they the same BSTs?

// Rules: Don't construct the BST
// arr1: [3, 5, 4, 6, 1, 0, 2]
// arr2: [3, 1, 5, 2, 4, 6, 0]
// expected output: true

let arr1 = [3, 5, 4, 6, 1, 0, 2];
let arr2 = [3, 1, 5, 2, 4, 6, 0];

function sameBSTs(arr1, arr2) {
  // works better with arrLength, index1, index2 as extra params
  // index1 === arrLength
  // base case
  if (arr1[0] !== arr2[0]) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.length === 1 && arr2.length === 1) {
    return true;
  }
  let root = arr1[0];
  // make sure both BSTs are the same height
  // if a child is < root then apply recursive fn on left child for node comparison
  // if a child is > root then apply recursive fn on right child for node comparison
  let leftArray1 = [];
  let rightArray1 = [];
  let leftArray2 = [];
  let rightArray2 = [];
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < root) {
      leftArray1.push(arr1[i]);
    } else if (arr1[i] > root) {
      rightArray1.push(arr1[i]);
    }
    if (arr2[i] < root) {
      leftArray2.push(arr2[i]);
    } else if (arr2[i] > root) {
      rightArray2.push(arr2[i]);
    }
  }
  return sameBSTs(leftArray1, leftArray2) && sameBSTs(rightArray1, rightArray2);
}
function preOrder(bst) {
  console.log(bst.key);
  if (bst.left) {
    preOrder(bst.left);
  }
  if (bst.right) {
    preOrder(bst.right);
  }
}
function inOrder(bst) {
  if (bst.left) {
    inOrder(bst.left);
  }
  console.log(bst.key);
  if (bst.right) {
    inOrder(bst.right);
  }
}
function postOrder(bst) {
  if (bst.left) {
    postOrder(bst.left);
  }
  if (bst.right) {
    postOrder(bst.right);
  }
  console.log(bst.key);
}

function main() {
  const BST = new BinarySearchTree();
  //   BST.insert(25, 25);
  //   BST.insert(15, 15);
  //   BST.insert(50, 50);
  //   BST.insert(10, 10);
  //   BST.insert(24, 24);
  //   BST.insert(35, 35);
  //   BST.insert(70, 70);
  //   BST.insert(4, 4);
  //   BST.insert(12, 12);
  //   BST.insert(18, 18);
  //   BST.insert(31, 31);
  //   BST.insert(44, 44);
  //   BST.insert(66, 66);
  //   BST.insert(90, 90);
  //   BST.insert(22, 22);
  // console.log(BST);
  // console.log(tree(BST));
  // console.log(heightOfBST(BST));
  // console.log(isBst(BST));
  // console.log(isBst(''));
  // console.log(treeValues(BST));
  // console.log(thirdLargest(treeValues(BST)));
  // console.log(balanced(BST));
  // console.log(sameBSTs([3, 5, 4, 6, 1, 0, 2],[3, 1, 5, 2, 4, 6, 0]));
}

module.exports = { BinarySearchTree };
