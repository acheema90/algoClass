export default class Queue {
    constructor(capacity){
        this.capacity = capacity || Math.Infinity;
        this.key = 0;
        this.length = 0;
    }

    enqueue(value) {
        if (this.length < this.capacity) {
            this[this.key] = value;
            this.key += 1;
            this.length += 1;
        }
    }

    dequeue() {
        for (let i = 0; i < this.length; i += 1) {
            this[i] = this [i+1];
        }
        this.key -= 1;
        this.length -= 1;
        delete this[this.key];
    }

    peek() {
        console.log(this[0]);
    }

    count() {
        console.log(this.key);
    }
};

let Q = new Queue(10);
Q.enqueue('A');
Q.enqueue('B');
Q.enqueue('C');
Q.enqueue('D');
Q.enqueue('E');
console.log(Q);
Q.dequeue();
console.log(Q);
Q.peek();
Q.count();
Q.dequeue();
Q.dequeue();
console.log(Q);
