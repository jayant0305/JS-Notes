class CustomSet{
    constructor(){
        this.set=[];
    }

    push(value){
        this.set.push(value);
    }

    pop(){
        this.set.splice(this.set.length-1);
    }

    print(){
        console.log(this.set);
    }
}

const set=new CustomSet();
set.push(10);
set.push(11);
set.push(2);
set.push(0);

set.print();

set.pop();
set.pop();

set.print();