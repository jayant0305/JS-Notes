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
