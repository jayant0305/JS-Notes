/************** IIFE ******************/

//global scope pollution
//immediate function execution

(function(){
    console.log("IIFE")
})();

// ()//=> defination
// ()//=> callings



// for more than one IIFE use ;
(()=>{
    console.log("IIFE")
})();

(()=>{
    console.log("IIFE2")
})();

//Adding parameters
((name)=>{
    console.log(name)
})("Jayant");