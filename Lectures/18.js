/***********************  FUNCTIONS AND PARAMETERS **************************************/
function sayMyName(){
    console.log("J")
    console.log("A")
    console.log("Y")
    console.log("A")
    console.log("N")
    console.log("T")
}

// sayMyName => represents reference
// sayMyName() => represents calling 


function addTwoNumber(num1,num2){
    return num1+num2
}

function myName(username="Jay"){ //==> defining default username
    if(username==undefined){ //==> username==undefined is equivalent to !username
        console.log("Please enter username")
        return 
    }
    return `${username} this is my name`
}

console.log(myName())

