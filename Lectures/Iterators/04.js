//All about filter 
const arr=[1,2,3,4,5,6,7,8,9,10]
const arrResult=arr.forEach(function(item){
    console.log(item)
    return item
})
console.log("Array Result through forEach",arrResult)

//forEach not return anything
//that's way filter is used
const arrResult2=arr.filter((item)=>item>=5)  // no use of "{}"
console.log(arrResult2)


//Objects for filtering
let object=[
    {
        id:1,
        name:"Jayant",
        age:10
    },
    {
        id:2,
        name:"Rahul",
        age:28
    },
    {
        id:3,
        name:"Rajiv",
        age:14
    }
]

const result=object.filter((item)=>item.age>=15)
console.log(result)