class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}


class CircularLinkList{
    constructor(){
        this.head = null
        this.tail=null
        this.size = 0
    }


    isEmpty(){
        return this.size === 0
    }

    append(value){
      
        if(this.isEmpty()){
            const node = new Node(value)
            node.next = node
            this.head = node;
            this.tail = node

        }else{
            const node = new Node(value)
            node.next = this.head
            this.tail.next = node;
            this.tail = node
        }

          
        
        this.size++
    }

    prepend(value){
        if(this.isEmpty()){
            const node = new Node(value)
            node.next = node

            this.head = node
            this.tail = node
        }else{

            const node = new Node(value)
            node.next = this.head;

            this.tail.next = node
            this.head = node

        }

        this.size++
    }


    toArray(){
        const array=[]
        let currentNode =this.head;
        do{
            array.push(currentNode.value)
            currentNode=currentNode.next
        }while(currentNode !== this.head)
       return array;
    }


      // traverse to index
  traverseToIndex(index) {
    if (index < 0) return undefined
    // keeps track of traversal
    let counter = 0
    // starting point
    let currentNode = this.head

    // traverse to the target index
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  insert(index, value) {
    // if length is 0, just prepend (add to the beginning)
    if (index === 0) {
      return this.prepend(value)
    }
    // validate the received index parameter:
    if (!index) return 'Index is missing'
    if (typeof index !== 'number') return 'Index should be a number'
    if (index < 0) return 'Index should be bigger than zero'
    
    // if length is too long, just append (add to the end)
    if (index >= this.size) {
      return this.append(value)
    }

    // Initialize a newNode with value recieved and next as null.
    const newNode = new Node(value)

    // pick previous index
    const preIdx = this.traverseToIndex(index - 1)
    // pick target index
    const targetIdx = preIdx.next
    // place newNode in front of previous node
    preIdx.next = newNode
    // place target index in front of new node
    newNode.next = targetIdx
    this.size++
    return this
  }

  deleteHead() {
    // check if there is a head value - if not return a warning (or an error)
    if (this.length === 0) return 'List is empty'
    const currHead = this.head
    
    // if one element left
    if (this.size === 1) {
      const headVal = this.head.value
      this.head = null
      this.tail = null
      this.size--
      return headVal
    }
    
     // pick the current head value:
    const headVal = this.head.value
    
    // define newHead as this.head.next
    const newHead = this.head.next
    // now change the head pointer to newHead
    this.head = newHead
    // update tail pointer to point on updated head:
    this.tail.next = this.head
    this.size--
    return headVal
  }

  deleteTail() {
    // check if length is zero - if not return a warning (or an error)
    if (this.size === 0) return 'List is empty'

    // If there is only one node left
    if (this.size === 1) {
      const headVal = this.head.value
      this.head = null
      this.tail = null
      this.size--
      return headVal
    }
    
    // Store the current tail value:
    const tailVal = this.tail.value
    
    // Pick the previous node of tail
    const newTail = this.traverseToIndex(this.size - 2)
    // Make newTail point to the head:
    newTail.next = this.head
    // Make tail to point to newTail, this will remove the tail from the list:
    this.tail.next = newTail
    this.size--
    return tailVal
  }

  
  reverse() {
    // Checkup - if list only contains one item, no need to reverse
    if (!this.head.next) return

    // We'll use 3 pointers. Prev and Next is empty at the start
    let previousNode = null
    let currentNode = this.head
    let nextNode = null
    
    do {
        // Start with taking the next node reference
        nextNode = currentNode.next
        // Then, point the currentNode to previous one
        currentNode.next = previousNode
        // Now, move the previous and current one step forward. How?
        // To move the previousNode one step forward, we reference it to the currentNode:
        previousNode = currentNode
        // To move the currentNode one step forward, we reference it to the nextNode:
        currentNode = nextNode
    } while (currentNode !== this.head)
    
    this.head.next = previousNode
    this.head = previousNode
    return this.toArray()
  }


    printList() {
        if (!this.head) return;
        let res = ""
        let curr = this.head;
        while (curr) {
         res += `${curr.value } `
          curr = curr.next;
          if (curr === this.head) break;
        }
        return res
      }
    
    

}


    // Example usage:
    const cll = new CircularLinkList();
    cll.append(1);
    cll.append(2);
    cll.append(3);
    cll.append(4);
    
    console.log(cll.printList());
    cll.prepend(10)
    console.log(cll.printList());
    cll.toArray()
    cll.deleteHead()
    console.log(cll.printList());
    cll.deleteHead()
    console.log(cll.printList());
    cll.insert(2, 8)
    console.log(cll.printList());
    cll.reverse()
    console.log(cll.printList());