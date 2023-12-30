var count=0;

function add(...args) {
    count++;
    return args.reduce((acc,curr)=>acc+curr,0)
}

function memoize(fn){
    let cache={}
    console.log(cache)
    return function(...args){
        let cacheKey = args.join(",").toString()
        if(cache[cacheKey]!==undefined){
            console.log("IN"+cache)
            return cache[cacheKey]
        }
        else {
            console.log("OUT"+JSON.stringify(cache))
            return cache[cacheKey] =fn(...args)
        }
    }
}

const memoizedAdd=memoize(add)
console.log(memoizedAdd(2,3,4,5,6,7,8,9,10,11,12))
console.log(count)
console.log(memoizedAdd(2,3))
// console.log(count)