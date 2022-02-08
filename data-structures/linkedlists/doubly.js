class DLLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let node = new DLLNode(value);
    console.log(node);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    let node = new DLLNode(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      this.length++;
      return this.printList();
    }
    const node = new DLLNode(value);
    const leader = this.traveseToIndex(index - 1);
    const follower = leader.next;
    leader.next = node;
    node.prev = leader;
    follower.prev = node;
    node.next = follower;
    this.length++;
    this.printList();
  }

  traveseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}

const myDLL = new DoubleLinkedList(10);
// myDLL.append(3);
myDLL.prepend(1);
myDLL.prepend(5);
myDLL.insert(2, 99);
console.log(myDLL);
