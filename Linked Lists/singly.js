
// 10-->15-->20

class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    _newNode(value){
        return {
            value: value, 
            next: null
        }
    }

    append(value) {
        const newNode = this._newNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        const newNode = this._newNode(value);
        newNode.next = this.head;
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
        newNode.next = holdingPointer;
        this.length++;
    }

    remove(index){
        // 10->20->30->40->50
        if(index === 0){
            const unWantedNode = this.traverseToIndex(index);
            this.head = unWantedNode.next;
            unWantedNode.next = null;
            this.length--;
            return null;
        }
        const leader = this.traverseToIndex(index-1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        if(index === this.length-1){
            this.tail = leader;
        }
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

    reverse(){
        // 10->20->30->40
        if(!this.head.next){
            return this.head;
        }
        this.tail = this.head;
        let first = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }

}


const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.insert(2, 50)
myLinkedList.insert(10, 60)
myLinkedList.insert(1, 70);
myLinkedList.remove(0);
myLinkedList.remove(0);
myLinkedList.remove(4);
myLinkedList.reverse();
console.log(myLinkedList);