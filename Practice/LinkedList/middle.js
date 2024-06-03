class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

const print=(LL)=>{
    let temp=LL;
    while(temp!=null){
        console.log(temp.value);
        temp=temp.next;
    }
}

const LL=new Node(10);
LL.next=new Node(20);
LL.next.next=new Node(30);

const middle=(head)=>{
    let slow=head;
    let fast=head;

    while(fast.next!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }

    return slow;
}

console.log(middle(LL).value);