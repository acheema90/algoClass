export default class Queue {
    constructor(capacity){
        this.capacity = capacity || Math.Infinity;
        this.key = 0;
    }

    enqueue(value) {
        if (value < this.capacity) {
            this[this.key] = value;
            this.key += 1;
        }
    }

    dequeue() {
        this[0] = null;
    }

    peek() {
        return this[0];
    }

    count() {
        return this.key;
    }
};

let Q = new Queue(10);
Q.enqueue('A');
Q.enqueue('B');
Q.enqueue('C');
Q.enqueue('D');
Q.enqueue('E');
Q.dequeue();
Q.dequeue();
Q.dequeue();
Q.peek();
Q.count();
