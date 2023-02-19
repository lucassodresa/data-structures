class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  getTop() {
    if (this.top === null) {
      console.log("Top: null");
    } else {
      console.log("Top: " + this.top.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.top = null;
    this.height = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;

    const temp = this.top;
    this.top = temp.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}
