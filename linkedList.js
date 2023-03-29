// Create a class to create a node/object
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

// Create a class to create a linked-list
class LinkedList {
    constructor(){
        this.head = null
    }

    // Create a function that tells us the size of list 
    size() {
        let count = 0 
        let node = this.head
        while(node) {
            count++
            node = node.next
        }
        return count
    }

    // Create a function to get the last node in the list 
    getLast(){
        let lastNode = this.head
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    //Create a function to see if the list is empty or not
    isEmpty(){
        return this.size === 0 
    }
}

// Create nodes
let nodeA = new Node("A")
let nodeB = new Node("B")

// Change the nodeA 'next' property to nodeB
nodeA.next = nodeB

// Create a list 
let list = new LinkedList()

// Assign nodeA to be the head
list.head = nodeA

// Create nodeC
let nodeC = new Node("C")

// Change the nodeB 'next' property to nodeC
nodeB.next = nodeC



console.log('')
console.log('---NODE---')
console.log(nodeA)
console.log(nodeB)
console.log(nodeC)
console.log('')
console.log('---LINKED-LIST---')
console.log(list.head.next.next)

console.log("size:", list.size())
console.log("last node:", list.getLast())
console.log("is empty:", list.isEmpty())



//if there are links that are very long you'll have to loop through the link instead of writing next a million times
// let currNode = list.head
// let depth = 902

// for (let i = 0; i < depth; i++) {
//     currNode = currNode.next
// }

// console.log(currNode)