const LinkList = require("./linkStackTail.js");

class Queue{
    constructor(){
        this.list = new LinkList()
    }

    enqueue(value){
        return this.list.append(value)
    }

    dequeue(){
        return this.list.removedFromfront()

    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    print(){
        return this.list.print()
    }
}


const myQueue = new Queue()

myQueue.enqueue(10)
myQueue.enqueue(60)
myQueue.enqueue(100)


console.log(myQueue.isEmpty())
console.log(myQueue.print())
myQueue.dequeue()
console.log(myQueue.print())