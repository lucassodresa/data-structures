const { printObject } = require("../common");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = this.tail = newNode;
    this.length = 1;
  }
}

const linkedList = new LinkedList(4);

printObject(linkedList);
