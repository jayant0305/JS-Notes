/*************************** CONTROL FLOW ******************************/
// <,>,<=,>=,==,!=,!==,===
// if(2!==2){
//     console.log("if")
// }
// else{
//     console.log("else");
// }

//short hand notation
if(true)console.log("if")
else if(true)console.log("else if")
else console.log("else");


const month=14;
switch(month) {
    case 1:console.log("Jan")
    break;
    case 2:console.log("Feb")
    break;
    case 3:console.log("Mar")
    break;
    default:console.log("No month")
}


//TRUTHY 
//1. empty array []
//2. "0"
//3. 'false'
//4. " "
//5. {}
//6. function(){}

//FALSE
//1. 0
//2. -0
//3. 0n
//4. empty string
//5. null
//6. undefined
//7. NaN


const object={
    name:"<NAME>",
    age:25,
    city:"Bangalore"
}

if(Object.keys(object).length==0){
    console.log(object.name)
}



//Nullishing Coalescing Operators(??) : null and undefined

const num1=null??10;
console.log(num1)

const num2=undefined??10;
const num3=null??check1??10


//Ternary Operators
const num4=true ?10:20
console.log(num4)