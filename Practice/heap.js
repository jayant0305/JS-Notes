class Heap{
    constructor(){
        this.heap=[];
    }

    parent(i){
        return (i-1)/2;
    }

    left(i){
        return 2*i+1;
    }

    right(i){
        return 2*i+2;
    }

    insert(value){
        this.heap.push(value);
        this.upheap(this.heap.length-1);
        return this.heap;
    }

    upheap(i){
        if(i<=0)return;
        const parentIndex=this.parent(i);
        if(this.heap[parentIndex]>this.heap[i]){
            [this.heap[parentIndex],this.heap[i]]=[this.heap[i],this.heap[parentIndex]];
        }
        this.upheap(parentIndex);
    }

    remove(){
        if(this.heap.length ==0)return ;
        const top=this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap.pop();
        this.downheap(0);
        return top;
    }

    downheap(i){
        const left=this.left(i);
        const right=this.right(i);
        let min=i;
        if(left<this.heap.length && this.heap[min]>this.heap[left]){
            min=left;
        }
        
        if(right<this.heap.length && this.heap[min]>this.heap[right]){
            min=right;
        }

        if(min!=i){
            [this.heap[min],this.heap[i]]=[this.heap[i],this.heap[min]];
            return this.downheap(min);
        }
    }

    heapSort(){
        const answer=[]
        while(this.heap.length!=0){
            answer.push(this.remove());
        }
        return answer;
    }
}



const h=new Heap();
const unsortedArray=[4,1,3,2,16,9,10,14,8,7];
for (const item of unsortedArray) {
    h.insert(item)
}
console.log(h.heap);



console.log(h.heapSort())