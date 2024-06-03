const array=[1,2,3,4,5,6,7]
array.forEach((item)=>{
    console.log(item)
})

// const str="Jayant";
// str.forEach((item)=>{
//     console.log(item)
// })

// FOREACH NOT ACCEPTABLE FOR STRINGS

// const object={
//     name: 'Jayant',
//     age :22
// }
// object.forEach((item)=>{
//     console.log(item)
// })

// FOREACH NOT ACCEPTABLE FOR OBJECTS

const map=new Map([
    ["name","Jayant"],
    ["age",20]
]);
map.forEach((key,value)=>[
    console.log(key+ "="+value)
])
const set=new Set([1,2,3,4,5,6,7,8,9]);
set.forEach((item)=>{
    console.log(item)
})