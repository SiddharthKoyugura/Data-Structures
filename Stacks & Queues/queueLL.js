// Queue using Linked List

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(!this.length){
            this.first = newNode;
            this.last = newNode;
        }else{
            // 10->20->30
            newNode.next = this.first;
            this.first = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(!this.first){
            return null;
        }
        else if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue);