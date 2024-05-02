const LinkList = require("./linkStackTail.js");

class Stack{
    constructor(){
        this.list = new LinkList()
    }


    push(value){
        return this.list.prepend(value)
    }

    pop(){
        return this.list.removedFromfront()

    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}



const myStack = new Stack()

myStack.push(20);
myStack.push(10)
myStack.push(50)
myStack.pop()
console.log(myStack.peek())


console.log(myStack.print())