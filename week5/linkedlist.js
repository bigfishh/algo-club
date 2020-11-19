// simple implementation with two nodes 

const firstNode = {
    data: "hello"
}

const secondNode = {
    data: "there"
}

firstNode.next = secondNode

const zeroNode = {
    data: "i'm first",
    next: firstNode
}

// console.log(zeroNode)

// javascript implementation
class Node {
    constructor(data, next=null) {
        this.data = data 
        this.next = next
    }
}
// console.log(new Node())
// let chickenNode = new Node("chicken") // {data: chicken}
// chickenNode.next = new Node("pig")// {data: chicken, next: {data: pig}}

class LinkedList {
    head = null

    prepend(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0 
        let currentNode = this.head
        while (currentNode) {
            counter++ 
            currentNode = currentNode.next
        }
        return counter
    }

    deleteTail() {
        if (!this.head) {
            return
        } else if (!this.head.next) {
            return this.head = null 
        }

        let theOneBeforeTheCurrent = this.head
        let currentNode = this.head.next

        while (currentNode) {
            if (!currentNode.next) {
                return theOneBeforeTheCurrent.next = null
            }

            currentNode = currentNode.next
            theOneBeforeTheCurrent = theOneBeforeTheCurrent.next
        }

    }

}

let newLinkedList = new LinkedList()
// console.log(newLinkedList)
newLinkedList.prepend("apple pie")
newLinkedList.prepend("banana bread")
// newLinkedList.prepend("lemon tart")
// newLinkedList.prepend("fruit tart")
console.log(newLinkedList.size()) 
newLinkedList.deleteTail()
console.log(newLinkedList)



















