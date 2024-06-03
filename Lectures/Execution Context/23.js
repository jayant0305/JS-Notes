/****************** JAVASCRIPT EXECUTION CONTEXT ***********************/
//1. Global Execution Context (this) 
//          =>Memory Execution Phase (variable = undefine , function = defination)
//          =>Execution Phase 
//2. Function Execution Context
//3. Eval Execution Context

/**********************************
function add(val1,val2){
    return val1+val2;
}
 let result=add(num1,num2)

 in this new variable environment + exceution thread BOX is created 
 and memory creation phase and function execution phase is executed
num1 =undefined
num2 =undefined

then value assign in execution context 
IMP: RETURN pass value global context phase


for ARROW FUNCTION CALL behave like a variable
example:-
f()

var f=()=>{
    return console.log(this)
}


//FOR THE function keyword it reserves the memory space 
but for the arrow function memory space is not reserved



THREE CATEGORY FUNCTIONS
1. function(){            ==> memory space

}
2. const var= ()=>{       ==>no memory space

}
3. let var= function(){   ==>no memory space

}
 */