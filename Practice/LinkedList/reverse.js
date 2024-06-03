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

// print(LL);

const dummy=null;
let prev=dummy;
let temp=LL;
while(temp!=null){
    const nextt=temp.next;
    temp.next=prev;
    prev=temp;
    temp=nextt;
} 

print(prev);