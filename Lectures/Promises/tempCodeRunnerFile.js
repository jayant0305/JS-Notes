/* Promises Object have 3 states 
1. pending
2. fulfill
3. rejected
 */

// const promiseOne=new Promise(function(resolve,rejected){
//     setTimeout(()=>{
//         console.log("Timeout")
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Task Completed")
// })

//ABOVE then and resolve not connected with each other




const promiseTwo=new Promise(function(resolve,rejected){
    setTimeout(()=>{
        //or add resolve() answer remain same
        console.log("Timeout")
        resolve()
    },1000)
})
promiseTwo.then(function(){
    console.log("Task Completed")
})
promiseTwo.then(function(){
    console.log("Task Completed")
})
promiseTwo.then(function(){
    console.log("Task Completed")
})