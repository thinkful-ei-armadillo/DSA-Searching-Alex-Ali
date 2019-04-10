const { BinarySearchTree } = require("./bstSearch");

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

function commanderQueue(bst, result = []) {
  const queue = new Queue();
  queue.enqueue(bst);

  while (queue.first !== null) {
    const node = queue.dequeue();
    result.push(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  result.forEach(p => console.log(p));
}

function main() {
  let Enterprise = new BinarySearchTree();
  Enterprise.insert(5, 'Captain Picard');
  Enterprise.insert(3, 'Commander Riker');
  Enterprise.insert(2, 'Lt. Cmdr. Worf');
  Enterprise.insert(4, 'Lt. Cmdr. LaForge');
  Enterprise.insert(1, 'Lieutenant security-officer');
  Enterprise.insert(6, 'Commander Data');
  Enterprise.insert(8, 'Lt. Cmdr. Crusher');
  Enterprise.insert(7, 'Lieutenant Selar');
  commanderQueue(Enterprise);
}

main();