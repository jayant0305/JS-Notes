/*------------------DATE AND TIME-------------- */
let date = new Date() //=> type of object
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())


let mycreated = new Date(2024,0,23) // Year, month(start with 0), day
console.log(mycreated.toString())

mycreated.toLocaleString('en-US',{
    weekday:"short"
})