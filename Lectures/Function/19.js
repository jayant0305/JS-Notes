/************************  FUNCTIONS WITH OBJECTS AND ARRAY **********************************/

function priceCalculation1(...args) { //==> ... is a REST Operator
    console.log(args)
}

function priceCalculation2(val1,val2,...args) { //==> ... is a REST Operator
    console.log(args)
}

// function priceCalculation3(...args,val1,val2) { //==> ... INCORRECT FUN
//     console.log(args)
// }

priceCalculation2(200,100) //==> args is empty array



/********* Passing Objects ******** */
function handleObject(obj){
    console.log(`My name is ${obj.name} and I am ${obj.gender}`)
}

const obj={
    name: "Jay",
    gender: "Male"
}

handleObject(obj)
//OR
handleObject({
    name: "Obj",
    gender: "Object"
})


/********* Passing Arrays ******** */
function handleArray(arr){ // Pass by reference
    return arr[0]
}

const arr=[1,2,3]
handleArray(arr)
//OR
handleArray([1,2,3])



