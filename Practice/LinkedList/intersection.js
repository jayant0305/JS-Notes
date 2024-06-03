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

const L1=new Node(1);
L1.next=new Node(3);
L1.next.next=new Node(1);
L1.next.next.next=new Node(2);
L1.next.next.next.next=new Node(4);


const L2=new Node(3)
L2.next=L1.next.next.next;
console.log("L1");
print(L1);
console.log("L2");
print(L2);

const diff=(L1,L2)=>{
    let temp1=L1;
    let temp2=L2;
    let l1=0;
    let l2=0;
    while(temp1!=null){
        l1++;
        temp1=temp1.next;
    }
    while(temp2!=null){
        l2++;
        temp2=temp2.next;
    }

    return l1-l2;
}

const intersection=(L1,L2)=>{
    let diffValue=diff(L1,L2);
    let l1Head=L1;
    let l2Head=L2;
    if(diffValue<0){
        while(diffValue!=0){
            l2Head=l2Head.next;
            diffValue++;
        }    
    }    
    else{
        while(diffValue!=0){
            l1Head=l1Head.next;
            diffValue--;

        }       
    }    

    while(l1Head!=null){
        if(l1Head==l2Head)return l1Head;
        l1Head=l1Head.next;
        l2Head=l2Head.next;
    }    

    return null;
}    




console.log(intersection(L1,L2));