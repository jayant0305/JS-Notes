/********************** OBJECTS IN JS (singelton and constructors)  ********************************/
let objectSingelton =new Object() //=> this is a singleton object
objectSingelton.name="Jayant"
objectSingelton.id=123198201
objectSingelton.isLoggedIn=false


//Object in Object
let objectInObject={
    fullname:{
        first:"John",
        last:"Abrahim"
    },
    age:23

}


//COMBINING OBJECTS
let objectOne={

}
let objectTwo={

}
let objectThree=Object.assign(objectOne,objectTwo)
console.log(objectOne) 
console.log(objectOne === objectThree)
let objectFour=Object.assign({},objectOne,objectTwo)



//SPREAD OPERATORS
let spreadObject={...objectOne,...objectTwo}


Object.keys(object)
Object.values(object)
Object.entries(object)