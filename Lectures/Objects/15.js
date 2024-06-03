/************************   OBJECTS IN JS   **************************** */
let varObject1={
    name:"Jay",
    rollNo:20001015031,
    age:20,
    "type":"Human"
}

console.log(varObject1.name)
//UNIQUE method to access
console.log(varObject1["name"])

// declaring symbols in the object
let varSymbol=new Symbol()
let object={
    name:"Jay",
    rollNo:20001015031,
    age:20,
    "type":"Human",
    [varSymbol]:"key"
}
console.log(object[varSymbol]);

//FREZZE
// Object.freeze(object)



//Adding functions in the object
object.greet=function(){
    console.log("Hello")
}
console.log(object.greet)  //==> function anonymous 
console.log(object.greet())

object.greetWithName=function(){
    console.log(`Hello ${this.name}`)
}
console.log(object.greetWithName()) //