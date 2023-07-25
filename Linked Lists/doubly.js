
// 10-->15-->20

class LinkedList {
    constructor(value){
        this.head = {
            prev : null,
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    _newNode(value){
        return {
            prev : null,
            value: value, 
            next: null
        }
    }

    append(value) {
        const newNode = this._newNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        const newNode = this._newNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }
    
    insert(index, value){
        if(index === 0){
            return this.prepend(value);
        }else if(index >= this.length){
            return this.append(value);
        }
        // 10->20->30->40
        const newNode = this._newNode(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = holdingPointer;
        holdingPointer.prev = newNode;
        this.length++;
    }

    remove(index){
        // 10->20->30->40->50
        if(index === 0){
            const unWantedNode = this.traverseToIndex(index);
            this.head = unWantedNode.next;
            this.head.prev = null;
            unWantedNode.next = null;
            this.length--;
            return null;
        }else if(index === this.length-1){
            const leader = this.traverseToIndex(index - 1);
            const unWantedNode = leader.next;
            leader.next = null;
            this.tail = leader;
            this.length--;
            return;
        }
        const leader = this.traverseToIndex(index-1);
        const unWantedNode = leader.next;
        const follower = unWantedNode.next;
        follower.prev = leader;
        leader.next = follower;
        this.length--;
    }

    traverseToIndex(index){
        let counter = 0;
        let temp = this.head;
        while(counter !== index){
            temp = temp.next;
            counter++;
        }
        return temp;
    }

    printList(){
        // 10->20->30->40
        const array = [];
        let temp = this.head;
        while(temp != null){
            array.push(temp.value);
            temp = temp.next;
        }
        return array;
    }

}


const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(40);
myLinkedList.insert(1, 55);
myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList);