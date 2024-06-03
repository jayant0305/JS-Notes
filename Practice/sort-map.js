let map=new Map([
    [10,2],
    [2,3],
    [3,4]
]);
console.log(map);

// sort 1
map=new Map([...map].sort((a,b)=>a[0]-b[0]))
console.log(map);

//sort 2
const array=Array.from(map).sort((a,b)=>b[1]-a[1]);
console.log(array);