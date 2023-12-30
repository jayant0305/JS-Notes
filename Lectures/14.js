/* ------------------------ARRAYS IN JS------------------------- */

// Arrays may and may not contain different data types elements
// copy generated in array is shallow copying

let array = new Array(1,2,3,4,5,6,7,8)
let array2 = [1,2,3,4,5,6,7,8]
console.log(array[0])

//Arrays methods
array.push(9)
console.log(array)
array.pop()
console.log(array)


//array.shift(10) ==>add it to first place (time consuming)
array.includes(9)

let newArray=array.join() //==> the tyoe is now changed to string

/* ------SLICE vs SPLICE methods----- 
1. slice includes only start 
2. splice includes start and end both
3. slice doen't affect main array
4. splice affects the main array*/

let sliceArr=array.slice(0,4)
console.log(sliceArr)
console.log(array)
let spliceArr=array.splice(0,4)
console.log(spliceArr)
console.log(array)



/*--------------------------------------- */
let arrayOne=["plus", "minus", "multiply"]
let arrayTwo=["divide", "modulo"]
// arrayOne.push(arrayTwo)
console.log(arrayOne) //==>  ['plus', 'minus', 'multiply', [ 'divide', 'modulo' ] ]4
let concatArray=arrayOne.concat(arrayTwo)
console.log(concatArray) //==> ['plus', 'minus', 'multiply, 'divide', 'modulo]


// USE SPREAD OPERATORS
let spreadArray=[...arrayOne,...arrayTwo]
console.log(spreadArray) 

//USE FLAT OPERATORS
let multiDArray=[1,2,3,4,5,6,[1,2,3,4,5],[1,3,6,[1,2,3,4,5]]]
let flatArray=multiDArray.flat(3)
console.log(flatArray)

//USE FROM METHOD
console.log(Array.from("JAYANT")) //also return empty array

//USE OF METHOD
let var1=100
let var2=200
let var3=300
console.log(Array.of(var1,var2,var3))