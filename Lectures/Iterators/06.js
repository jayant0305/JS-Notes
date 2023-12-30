//Reduce function
const arr=[1,2,3]
const total=arr.reduce(function(acc, currval) {
    console.log(acc+currval)
    return acc+currval
},0)

const total2=arr.reduce((acc, currval) => acc+currval,0)

const object=[
    {
        book:"book 1",
        price:200
    },
    {
        book:"book 2",
        price:300
    },
    {
        book:"book 3",
        price:400
    }
]

const totalPrice=object.reduce((acc, item) => acc+item.price,0)
console.log(totalPrice)