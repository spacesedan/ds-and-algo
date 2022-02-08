class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let node = new ListNode(value);
    // still pointing to this.head, so it is the same as saying this.head.next
    this.tail.next = node;
    // here this.tail is no longer pointing as this.head instead it is point to the new node we created
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    // create the node that will be the new head and make the next value the old head
    let node = new ListNode(value);
    node.next = this.head;
    // change the head value to the new node
    this.head = node;
    this.length++;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(this);
    console.log(arr);
  }
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      this.length++;
      return this.printList();
    }
    const node = new ListNode(value);
    const leader = this.traveseToIndex(index - 1);
    node.next = leader.next;
    leader.next = node;
    this.length++;
    // this.printList();
  }

  remove(index) {
    const leader = this.traveseToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
    return this.printList();
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

  revese() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    console.log(JSON.stringify(this));
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(24);
myLinkedList.printList();
myLinkedList.revese();
myLinkedList.printList();
