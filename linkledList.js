class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }


    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prePendValueToList(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head;
            let listValue = "";
            while(prev.next){
                listValue += `${prev.value} `
                prev = prev.next
            }
            prev.next = node;

        }
        this.size++
    }


    insert(value, index){
        if(index < 0 || index >= this.size){
            return null
        }
            if(index === 0){
                this.prePendValueToList(value)
            }else{
                let prev = this.head;
                let node = new Node(value)

                for(let i=0; i<index-1; i++){
                    prev= prev.next
                }
                node.next = prev.next
                prev.next = node
            }
        
        this.size++;
    }

    search(value){
        if(this.isEmpty()){
            return null
        }
        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i
            }
            curr =curr.next
            i++
        }
        return -1
    }

    deleteNode(index){
        if(index < 0 || index >= this.size){
            return null
        }

        let removedNode;
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next

        }else{

            let prev = this.head;

            for(let i=0; i < index-1; i++){

                prev = prev.next;
            }

            removedNode = prev.next;

            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }


    reverse(){
        if(this.isEmpty()){
            return null
        }

        let prev = null;
        let curr = this.head;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }

        this.head = prev
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }else{
            if(this.head.value === value){
                this.head = this.head.next
                this.size--
                return value
            }else{

                let prev = this.head
                while( prev.next && prev.next.value !== value){
                    prev = prev.next
                }

                if(prev.next){
                    let removedValue = prev.next

                    prev.next = removedValue.next
    
                    this.size--
                    return value
                }

                return null

            }
        
        }
    }

    printValue(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
        let curr = this.head;

        let listValues = ''

        while(curr){
            listValues += `${curr.value} `
            curr= curr.next
        }
        // console.log(listValues);
        return listValues
    }
}
}

const list = new LinkedList();

console.log(list.isEmpty())
console.log(list.getSize())
// list.insert(10, 0)
console.log(list.printValue())

list.append(60)
list.append(80)
list.insert(40, 1)

// console.log(list.getSize(), 'get the size')
console.log(list.printValue())

// console.log(list.deleteNode(1))
console.log(list.getSize(), 'get the size')
// console.log(list.removeValue(60))
// console.log(list.search(80))
console.log(list.reverse())
console.log(list.printValue())