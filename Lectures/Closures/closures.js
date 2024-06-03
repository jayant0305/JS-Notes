// A function with the lexical scope
function x(){
    var a=10
    function b(){
        console.log(a)
    }
    return b
}
var z=x()
console.log(z)
z()


/*************** USES *************
    Module Design Pattern
    Currying
    Function like once
    memoize
    maintaing state in async 
    setTimeout
    Iterators
    

    DISADVANTAGE
    accumulate lot of memory
    memory leak


    Garbage Collection
    release the unutilized memory
   
    
*/


for(let i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i)
    },(2*i+i)*1000)
}


function x(){
    var a=0;
    function y(){
        console.log(a)
    }
    return y;
}
x() //==> in this case a not free up the memory


// SMARTLLY GARBAGE COLLECTION
function x(){
    var a=0,z=0;
    function y(){
        console.log(a)
    }
    return y;
}
x()()

// here z is free up from the memory