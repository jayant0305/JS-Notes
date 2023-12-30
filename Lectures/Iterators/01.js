// For Loops
for (let i = 0; i <3;i++) {
    console.log("Enter") 
     
}


//Do while loop

//while loop



//For of Loops
let arr=[1,2,3,4,5,6,7,8,9]

for (let value of object) { //here object refers to array,String,Object
    
}


//Map
let map=new Map()
map.set("IND","India")
map.set("US","United States")
map.set("FR","France")
map.set("GB","United Kingdom")

for(const [key,value] of map){  //[key,value] not work for objects
    console.log(key,value)
}

//Objects
const objects = {
    name: "John",
    age: 30,
    city: "New York"
}

//USE For In Loop
for (const key in object) {
    console.log(key)
}
