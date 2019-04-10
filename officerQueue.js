const BST = require("./bstSearch");

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.last = null;
    this.first = null;
  }
  enqueue(data) {
    if (!this.first) {
      this.first = new _Node(data, null);
      this.last = this.first;
    } else if (this.last) {
      let newNode = new _Node(data, null);
      this.last.next = newNode;
      this.last = newNode;
    }
  }
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      let removedNode = this.first;
      this.first = this.first.next;
      return removedNode.data;
    }
  }
}

function commanderQueue(queue) {}

function main() {
  let Enterprise = new BST();
  Enterprise.insert("");
}
