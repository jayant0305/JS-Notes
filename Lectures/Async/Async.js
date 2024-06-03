/*
Javascript => single threaded and synchronous language

Function of code
1. Blocking (Javascript) [SYNCHRONOUS]
2. Non Blocking [ASYNCHRONOUS]

*** Asynchronous due to environment like Node or V8 Engine

call Stack => set timeout (environment) => Register Call Stack ==> Task Queue ==> Call Stack (Engine)
fetch() => Promise => High priority queue => Call Stack (Engine)

*/

console.log("1");
setTimeout(function(){
    console.log("2");
},0)
console.log("3");
//OUTPUT - 1 3 2


