// STACKS
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new ListNode(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    return this.length++;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let lastNode = this.top;
    this.top = this.top.next;
    this.length--;
    return lastNode;
  }
  peek() {
    console.log(this.top);
    return this.top;
  }
}

// const myStack = new Stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// // myStack.peek();
// myStack.pop();
// myStack.pop();
// console.log(JSON.stringify(myStack));

class StackArr {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    this.array.pop();
    return this;
  }
}

// const myStackArr = new StackArr();
// myStackArr.peek();
// myStackArr.push('google');
// myStackArr.push('udemy');
// myStackArr.push('discord');
// myStackArr.pop();
// console.log(myStackArr);

// QUEUES
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log(this.first);
    return this.first;
  }
  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.length++;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    console.log(this);
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();
myQueue.dequeue();
console.log(JSON.stringify(myQueue));
