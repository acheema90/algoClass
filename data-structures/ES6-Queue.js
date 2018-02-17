export default class Queue {
    constructor(capacity){
        this.capacity = capacity || Math.Infinity;
        this.key = 0;
    }

    enqueue(value) {
        this[this.key] = value;
        this.key += 1;
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
