//  2597. The Number of Beautiful Subsets

const array=[2,4,6];
const k=2;

// beautiful subsets with no two elements absolute difference == k
const isBeautifulSubset=(ds,k,item)=>{
    for (const elements of ds) {
        if(Math.abs(item-elements)==k)return false;
    }
    return true;
}
function countBeautifulSubsets(array, k , ds, idx){
    if(idx>=array.length ){
        console.log(ds)
        return ds.length>0?1:0;
    }

    const isBeautiful=isBeautifulSubset(ds,k,array[idx]);
    let taken=0;
    if(isBeautiful){
        ds.push(array[idx]);
        taken=countBeautifulSubsets(array, k, ds,idx+1);
    }
    if(isBeautiful)
        ds.pop();

    const notTaken=countBeautifulSubsets(array,k,ds,idx+1);
    return taken+notTaken;
}

function countBeautifulSubsetsWithMap(array,k,idx,map){
    if(idx>=array.length)return 1;
    let taken=0,notTaken=0;
    if(!map.has(array[idx]+k) && !map.has(array[idx]-k)){
        map.set(array[idx],map.get(array[idx])+1);
        taken=countBeautifulSubsetsWithMap(array,k,idx+1,map);
        map.set(array[idx],-1);
        if(map.get(array[idx])==0)map.remove(array[idx]);
    }
    notTaken=countBeautifulSubsetsWithMap(array,k,idx+1,map);
    return taken+notTaken;
}
const start=(array,k)=>{
    // const result=countBeautifulSubsets(array,k,[],0);
    const result=countBeautifulSubsetsWithMap(array,k,[],new Map());
    return result;
}


const beautifulSubset=start(array,k);
console.log(beautifulSubset);