/* 
Javascript is a prototype based language 

1. constructor
2. Prototypes
3. Classes
4. Instances
*/ 

const object={
    name: 'Javascript',
    type:'prototype-based',
    funName: function(){
        console.log(`${this.name}`) //=> this refers to current context
    }
}
console.log(object.funName())
console.log(this) //=> this refers to global context



//WHY use new keyword
//To avoid overriding of value 

function User(name,age){
    this.name = name
    this.age = age

    return this
}
const userOne=User("Jayant",10)
console.log(userOne)
const userTwo=User("Jay",21)
console.log(userTwo)