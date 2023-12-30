/***
1. in arrow function this cannot be used
   due to prototype functioning[HAAR NHI MANTI]
2. Arrays,Strings and functions ==> Object ==>Null
3. 

***/

function fun(num){
  return num 
}
console.log(fun(3))
console.log(fun(3).power)
console.log(fun(3).prototype)