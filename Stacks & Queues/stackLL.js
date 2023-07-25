// Stack using Linked List


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.length){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop(){
        // 10->20
        if(!this.top){
            return null;
        }else if(this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.pop();
console.log(myStack);