const num=10;
let result=true;
for (let index = 2; index < Math.sqrt(num); index++) {
    if(num % 2  == 0) {
        result=false;
        break;
    }
}
console.log(result)
