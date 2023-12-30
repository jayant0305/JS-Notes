let num=33
let numObject=new Number(23)
let numObject2=new Number(1111.090)
console.log(numObject.toFixed(3))
console.log(numObject2.toPrecision(3))



let numLocalString=new Number(100000000)
console.log(numLocalString.toLocaleString())



/*----------------------------MATHS-------------------------------
Math is an Object

*/
let randomOne=Math.random();
console.log(randomOne)

//In range
let min=10
let max=20
let randomTwo=(Math.random()*(max-min+1))+min
console.log(Math.floor(randomTwo))
