class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = newNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //First make the next property newNode
      this.last.next = newNode;
      //As the next property is not null of this.last so make this.last to newNode
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let q = new Queue();
