//For Each Loops
const array=[1,2,3,4,5,6,7,8,9,10]
array.forEach(function(item){ 
    console.log("using function keyword",item)
})
array.forEach((item)=>{
    console.log("using =>",item)
})

function print(item){
    console.log("print function",item)
}

array.forEach(print) //==> only pass references

//other references
array.forEach((item, index,arr)=>{
    console.log(item,index,arr)
})


//Array of objects
let arrObjects =[
    {
        name: "Jarry"
    },
    {
        name: "John"
    },
    {
        name: "Jane"
    },
    {
        name: "Peter"
    },
    {
        name: "Mary"
    }
]
arrObjects.forEach((item)=>{
    console.log(item.name);
})