/********************  Global and Local Scope ************************** */
let variable1=1       //==>Local Scope
var variable2=2       //==> Global scope variable 
const variable3=0     //==> Local scope variable
variable4=9           //==> Local scope variable

{}//==> SCOPE 



function One(){
    const variable="Jayant"
    Two()                    //==> Doesn't matter to call before declaration
    function Two(){
        console.log(variable)
    }
}
One()


/* ****************  Function Hoisting ******************** */
// Two(2)//==> Function cannot call before declaration
const Two=function(variable){
    return variable
}



/******************** Block Scope **************/
var a=100
{
    var a=10
}

// this changes a to 10 [ Shadowing ]

// illegal shadowing
let a=10
{
    var a=10
}
//  OR
const a=10
{
    var a=10
}