/*Stack And Heap Memory 
Primitive in Stack
Non-Primitive in Heap Memory*/

let varOne=23
let varTwo=varOne

let varObject={
    num:23
}
let varObjectTwo=varObject
varObjectTwo.num=22

console.log(varObject.num)

