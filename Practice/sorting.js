const unsortedArray=[170,45,75,802,90,2,24]

const bubbleSort=(array)=>{
    const sorted=structuredClone(array);
    for (const i in sorted) {
        for(let j=parseInt(i)+1;j<array.length;j++){
            if(sorted[i]>sorted[j]){
                [sorted[i], sorted[j]]=[sorted[j], sorted[i]];
            }
        }
    }
    return sorted;
}

console.log(bubbleSort(unsortedArray));

const selectionSort=(array)=>{
    const sorted=structuredClone(array);
    for(let i=0;i<sorted.length;i++){
        let minIndex=i;
        for(let j=i+1;j<sorted.length;j++){
            if(sorted[j]<sorted[minIndex])minIndex=j;
        }
        [sorted[i],sorted[minIndex]]=[sorted[minIndex],sorted[i]]
    }
    return sorted
}

console.log(selectionSort(unsortedArray))

const insertionSort=(array)=>{
    const sorted=structuredClone(array);
    for (const i in sorted) {
        let j=i-1;
        const key=sorted[i]
        while(j>=0 && sorted[j]>key){
            sorted[j+1]=sorted[j];
            j--;
        }
        sorted[j+1]=key;
    }
    return sorted;
}

console.log(insertionSort(unsortedArray));

const  quick=(array,l,r)=>{
    let s=l;
    let e=r;
    const mid=l+Math.floor((r-l)/2);
    let pivot=array[mid];
    while(s<=e){
        while(array[s]<= pivot && s!=mid)s++;
        while(array[e]>pivot)e--;

        if(s<=e){
            [array[s], array[e]]=[array[e], array[s]];
            s++;e--;
        }
    }
    return s;
}
const quickSort=(array,l,r)=>{
    if(l>=r)return ;

    const pivot=quick(array,l,r);

    quickSort(array,l,pivot-1);
    quickSort(array,pivot+1,r);

    return array;
}
const unsortedQuickSortArray=[170,45,75,802,90,2,24,24]
console.log(quickSort(unsortedQuickSortArray,0,unsortedArray.length-1));


const merge=(array,l,r) => {
    const newArray=[];
    let i=l;
    const mid=l+Math.floor((r-l)/2);
    let j=mid+1;

    while(i<=mid && j<=r){
        if(array[i]<=array[j]){
            newArray.push(array[i]);
            i++;
        }
        else{
            newArray.push(array[j]);
            j++;
        }
    }

    while(i<=mid)newArray.push(array[i++]);
    while(j<=r)newArray.push(array[j++]);

    for (let k = 0; k < newArray.length; k++) {
        array[l + k] = newArray[k];
    }
    return array;
}
const mergeSort=(array,l,r)=>{
    if(l>=r)return;
    const mid=l+Math.floor((r-l)/2);
    mergeSort(array,l,mid);
    mergeSort(array,mid+1,r);

    return merge(array,l,r);
}
console.log(mergeSort(unsortedArray,0,unsortedArray.length-1));


