// Node class
class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

// BST class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value > currentNode.value){
                // Traverse right
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }else if(value < currentNode.value){
                // Traverse Left
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
        }
    }

    lookup(value){
        // If the tree is empty return false
        if(!this.root) return false;

        let currentNode = this.root;
        while(currentNode){
            if(value > currentNode.value)   currentNode = currentNode.right;
            else if(value < currentNode.value)  currentNode = currentNode.left;
            else    return currentNode; // Return the found node
        }
        return false; // Return false if the value not found
    }

    remove(value){
        if(!this.root) return false;
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if(value === currentNode.value){
                // Element found - do the remove operation

                // Case1: No right child
                if(!currentNode.right){
                    if(!parentNode) this.root = currentNode.left;
                    else{
                        // If parent > current, make current left child as a left child of parent
                        if(parentNode.value > currentNode.value){
                            parentNode.left = currentNode.left;
                        }
                        // If parent < current, make current left child as a right child of parent
                        else if(parentNode.value < currentNode.value){
                            parentNode.right = currentNode.left;
                        }
                    }
                }

                // Case2: Right child doesn't have left child
                else if(!currentNode.right.left){
                    currentNode.right.left = currentNode.left;
                    if(!parentNode) this.root = currentNode.right;
                    else{
                        // If parent > current, make current left child as a left child of parent
                        if(parentNode.value > currentNode.value){
                            parentNode.left = currentNode.right;
                        }
                        // If parent < current, make current left child as a right child of parent
                        else if(parentNode.value < currentNode){
                            parentNode.right = currentNode.right;
                        }
                    }
                }

                // Case3: Right child that has a left child
                else if(currentNode.right.left) {
                    // Find the right child's left most child
                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while(leftMost.left) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftMostParent.left = leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;

                    if(!parentNode) this.root = leftMost;
                    else {
                        if(parentNode.value < currentNode.value)    parentNode.right = leftMost;
                        else if(parentNode.value > currentNode.value)   parentNode.left =leftMost;
                    }
                }

                return true;
            }
        }
        return false;
    }
}


// Recursive function to display tree
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

// On Load
let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.remove(170);
tree.remove(9);

console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.lookup(170))

//      9
//  4      20
// 1  6   15 170