/********** Arraow Function and this Keyword **************/
const user={
    name:"Jayant",
    age:23,
    city:"Bangalore",
    welcome:function(){
        console.log(`Hello ${this.name}`)
    }
}

user.welcome()
user.name = "New user Jayant"
user.welcome()                //==>Hello New User Jayant    
console.log(`Welcome ${this}`)//==> this refers to the empty object


/* THIS
1. only for objects
2. function key(){
    console.log(this)
    }==> return so many stuff 
*/

const addTwoNumbers = (num1, num2) =>{
    return num1+num2
}
const addTwoNumbers2 = (num1, num2) => (num1+num2) //==> Implicit arrow functions 
const returnObject= (num1, num2) =>({ num1:num1, num2:num2})

const myArray =[1,2,3,4,5,6,7,8,9]
myArray.forEach((i)=>(i))