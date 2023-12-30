//Objects
const objects = {
    name: "John",
    age: 30,
    city: "New York"
}

//USE For In Loop
for (const key in objects) {
    // console.log(key," : -",objects[key])
}


//trying for in array
let array =["a", "b"]
for (const key in array) {
    console.log(key," : -",array[key])
}

//trying for in with map

let map = new Map()
map.set("a", 1)
map.set("b", 2)
map.set("c", 3)

for (const key of map) {  //NOT WORK because map are not iterable
    console.log(key)
}