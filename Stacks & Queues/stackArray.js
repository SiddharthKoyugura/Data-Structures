// Stack using Array

class Stack{
    constructor(){
        this.items = [];
    }

    peek(){
        return this.items[this.items.length-1];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        this.items.pop();
    }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack);