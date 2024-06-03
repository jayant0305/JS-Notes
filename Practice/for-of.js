//arrays
const array=[1,2,3,4,5,6,7,8,9]
for (const ele of array) {
    console.log(ele);
}


const str="Jayant";
for (const ele of str) {
    console.log(ele);
}


const obj={
    name:"Jayant",
    age:22
}
for (const [key,value] of Object.entries(obj)) {
    console.log(value);
}
//WE HAVE TO USE 

const map=new Map([
    ["100",200],
    ["200",400]
])
for(const key of map.keys()){
    console.log(key)
}


const set=new Set([1,2,3,4,5,6,7]);
for (const item of set) {
    console.log(item)
}