class Queue{
    constructor(){
        this.queue = [];
    }
    add(value){
        this.queue.push(value);
    }

    dequeue(){
        this.queue.shift();
    }

    print(){
        console.log(this.queue)
    }
}

const q=new Queue();
q.add(5);
q.add(6);
q.add(7);
q.add(10);

q.print();

q.dequeue();

q.print();
