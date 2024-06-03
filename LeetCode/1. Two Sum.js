const array=[2,7,11,15];
const target=9;

const bruteForce=(array, target)=>{
    for (let i=0 ;i<array.length ;i++) {
      const findSum=target-array[i];
      for (let j=i+1 ;j<array.length ;j++){
        if(array[j]==findSum)return [i,j];
      }  
    }
    return [-1,-1];
}

const betterSolution = (array, target) =>{
    const map=new Map();
    for (const idx in array) {
        const findSum=target-array[idx];
        if(map.has(findSum))return [parseInt(map.get(findSum)),parseInt(idx)];
        else map.set(array[idx],idx);
    }
    return [-1,-1];
}

const optimalSolution = (array, target) =>{
    array.sort((a,b)=>a-b);
    let i=0,j=array.length-1;
    while(i<=j){
        if(array[i]+array[j]>target)j--;
        else if(array[i]+array[j]<target)i++;
        else return [i,j];
    }
    return [-1,-1];
}
console.log(bruteForce(array,target));
console.log(betterSolution(array,target));
console.log(optimalSolution(array,target));


