const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Checking the Promise resolve")
        resolve();
    },1000)
})
promiseOne
.then(function(){
    console.log("Resolved")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Checking thee Promise Resolved 2")
        resolve()
    },3000)
}).then(function(){
    console.log("Resolved 2")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Jayant",email:"jayant@03gmai.com"})
    },2000)
})
promiseThree.then(function(user){
    console.log(user)
})



const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=false
        if(!err){
            resolve({username:"jayant",email:"jayantbhatia03@gmail.com"})
        }
        else{
            reject("ERROR : counter the rejection")
        }
    },1000)
})
//DO chaining insted of return value to variable
promiseFour.then((user)=>{
    // console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
})