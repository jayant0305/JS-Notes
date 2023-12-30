//Map return operational values
//filter return conditional values
const arr=[1,2,3,4,5,6,7,8,9]
const result=arr.map((item)=>item+10)

console.log(result)


const result2=arr
            .map(num=> num*10)
            .map(num => num>40)
console.log(result2)