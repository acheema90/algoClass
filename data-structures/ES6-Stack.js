export default class Stack {
    constructor(maxCapacity = undefined) {
        this.maxCapacity = maxCapacity;
        this.key = 0;
        this.length = 0;
    }

    push(item) {
        if (this.maxCapacity !== undefined){
            if(this.key <= this.maxCapacity) {
                this[this.key] = item;
                console.info(`pushed: ${this[this.key]}`);
                this.key++;    
            } else {
                console.warn('Max capacity already reached. Remove element before adding a new one.');
            }
        } else {
          this[this.key] = item;
          console.info(`pushed: ${this[this.key]}`);
          this.key++; 
        }
    }

    pop(){
        const latest = this.key - 1;
        const last = this[latest];
        this[latest] = null;
        this.key--;
        console.info(`popped: ${last}`);
        return last;
    }

    peek(){
        const latest = this.length - 1;
        console.info(`this is the most recent element in the collection: ${this[latest]}`);   
    }

    count() {
        this.length = this.key;
        console.info(`stack length is ${this.length}`);
        return this.length;
    }

    contains(item) {
      if (this.key !== 0) {
        return Object.values(this).includes(item);
      }
      return false;
    }

    until(value) {
        if (this.key >= 1) {
            let pops = 1;
            let values = Object.values(this).reverse().splice(3);
            for(let i = 0; i < values.length; i++) {
                if (values[i] === value) {
                    break;
                } else {
                    pops++;
                } 
            };
            return pops;
        }
        return -1;
    }
}

let st = new Stack(10);
st.push('ice');
st.push('uscis');
st.push('cbp');
st.push('fbi');
st.count();
st.peek();
st.pop();
st.pop();
st.count();
st.peek();
st.pop();
st.pop();
st.pop();
st.pop();
st.push('2');
st.push('5');
st.push('7');
st.push('3');
st.push('6');
st.push('9');
st.until('7');