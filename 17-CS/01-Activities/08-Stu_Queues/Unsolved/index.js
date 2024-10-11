// create the Queue class with two methods to remove and add an element
class Queue {
  constructor(container) {
    this.container = !container ? [] : container;
  }
  // push, pop
    addToQueue(el) {
        return this.container.push(el);
    }
    removeFromQueue() {
        return this.container.shift();
    }



}

module.exports = Queue;
