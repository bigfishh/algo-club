// queue javascript implementation
// First In First Out -- FIFO
class Queue {
    constructor() {
        this.data = new Stack()
    }

    enqueue(info) {
        this.data.unshift(info)
    }

    dequeue() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1]
    }
}



let firstQueue = new Queue()
firstQueue.enqueue("apples")
firstQueue.enqueue("figs")
firstQueue.enqueue("peaches")
firstQueue.enqueue("blueberries")
// console.log(firstQueue) // Queue { data: [ 'blueberries', 'peaches', 'figs', 'apples' ] }


let secondQueue = new Queue()
secondQueue.enqueue("yellow")
secondQueue.enqueue("orange")
secondQueue.enqueue("purple")
secondQueue.enqueue("blue")
secondQueue.enqueue("green")
// console.log(secondQueue) // Queue { data: [ 'green', 'blue', 'purple', 'orange', 'yellow' ] }


// weave queues question
function weaveQueues(queueOne, queueTwo) {
    // write code here
    let returnedQueue = new Queue

    while (queueOne.peek() || queueTwo.peek()) {
        if (queueOne.peek()) {
            returnedQueue.enqueue(queueOne.dequeue())
        }

        if (queueTwo.peek()){
            returnedQueue.enqueue(queueTwo.dequeue())
        }
    }

    return returnedQueue
}

// console.log(weaveQueues(firstQueue, secondQueue)) 
// ['green', 'blue', 'blueberries', 'purple', 'peaches', 'orange', 'figs', 'yellow', 'apples']










// // stack javascript implementation







// // StackToQueue Question

// class StacksToQueue {

// }

// let myStacksToQueue = new StacksToQueue()
// myStacksToQueue.enqueue("a")
// myStacksToQueue.enqueue("b")
// myStacksToQueue.enqueue("c")
// console.log(myStacksToQueue.dequeue()) // a
// console.log(myStacksToQueue.peek()) // b
// console.log(myStacksToQueue)
// // StacksToQueue { first: Stack { data: [ 'b', 'c' ] }, second: Stack { data: [] }}

































// Solution


// queue javascript implementation
// class Queue {
//     constructor() {
//         this.data = []
//     }

//     enqueue(info) {
//         this.data.unshift(info)
//     }

//     dequeue() {
//         return this.data.pop()
//     }

//     peek() {
//         return this.data[this.data.length - 1]
//     }
// }

// let firstQueue = new Queue()
// firstQueue.enqueue("apples")
// firstQueue.enqueue("figs")
// firstQueue.enqueue("peaches")
// firstQueue.enqueue("blueberries")
// console.log(firstQueue.dequeue()) // apples
// console.log(firstQueue.peek()) // figs
// console.log(firstQueue) // Queue { data: [ 'blueberries', 'peaches', 'figs'] }


// let secondQueue = new Queue()
// secondQueue.enqueue("yellow")
// secondQueue.enqueue("orange")
// secondQueue.enqueue("purple")
// secondQueue.enqueue("blue")
// secondQueue.enqueue("green")
// console.log(secondQueue) // Queue { data: [ 'green', 'blue', 'purple', 'orange', 'yellow' ] }


// function weaveQueues(queueOne, queueTwo) {
//     let newQueue = new Queue()
//     while (queueOne.peek() || queueTwo.peek()) {
//         if (queueOne.peek()) {
//             newQueue.enqueue(queueOne.dequeue())
//         }

//         if (queueTwo.peek()) {
//             newQueue.enqueue(queueTwo.dequeue())
//         }
//     }

//     return newQueue
// }


// console.log(weaveQueues(firstQueue, secondQueue)) 
// ['green', 'blue', 'blueberries', 'purple', 'peaches', 'orange', 'figs', 'yellow', 'apples']

// stack javascript implementation

class Stack {
    constructor() {
        this.data = []
    }

    push(info) {
        this.data.push(info)
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1]
    }

}

const firstStack = new Stack()
firstStack.push("grape")
firstStack.push("honey")
firstStack.push("watermelon")
firstStack.push("banana")
firstStack.push("strawberries")
console.log(firstStack) // [ 'grape', 'honey', 'watermelon', 'banana', 'strawberries' ]
console.log(firstStack.pop()) // strawberries
console.log(firstStack)
// console.log(firstStack.pop()) // banana
// console.log(firstStack.peek())
// console.log(firstStack) // [ 'grape', 'honey', 'watermelon' ]


// class StacksToQueue {
//     constructor() {
//         this.first = new Stack()
//         this.second = new Stack()
//     }

//     enqueue(info) {
//         this.first.push(info)
//     }

//     dequeue() {
//         while(this.first.peek()) {
//             this.second.push(this.first.pop())
//         }

//         const firstItem = this.second.pop()

//         while(this.second.peek()) {
//             this.first.push(this.second.pop())
//         }

//         return firstItem
//     }

//     peek() {
//         while(this.first.peek()) {
//             this.second.push(this.first.pop())
//         }

//         const firstItem = this.second.peek()

//         while(this.second.peek()) {
//             this.first.push(this.second.pop())
//         }

//         return firstItem
//     }
// }

// let myStacksToQueue = new StacksToQueue()
// myStacksToQueue.enqueue("a")
// myStacksToQueue.enqueue("b")
// myStacksToQueue.enqueue("c")
// console.log(myStacksToQueue.dequeue()) // a
// console.log(myStacksToQueue.peek()) // b
// console.log(myStacksToQueue)
// // StacksToQueue { first: Stack { data: [ 'b', 'c' ] }, second: Stack { data: [] }}