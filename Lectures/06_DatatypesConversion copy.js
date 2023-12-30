//String to Number
let scoreInString="33" // => in string
let scoreInNumber=Number(scoreInString) //=> in Number
//"33"=>33
//"33abc"=>NaN
//null=>0
//undefine=>NaN

//Number to Boolean
let num=undefined
let inBoolean=Boolean(num)
console.log(inBoolean)
//0=>false
//1=>true
//null=>false
//""=>false
//"jayant"=>true

//Number to String
let number=33
let inString=String(number)
console.log(inString)