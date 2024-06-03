//arrays
const array=[1,2,3,4,5,6,7,8,9]
for (const index in array) {
    console.log(array[index]);
}


const str="Jayant";
for (const index in str) {
    console.log(str[index]);
}


const obj={
    name:"Jayant",
    age:22
}
for (const key in obj) {
    console.log(obj[key]);
}




//WE  CAN'T USE FOR-IN IN MAPS BECAUSE MAPS ARE KEY ARE NOT ENUMERABLE

const set=new Set([1,2,3,4,5,6,7,8,9,10,11]);
for (const item in set) {
    console.log(item);
}

//WE  CAN'T USE FOR-IN IN SETS BECAUSE SETS VALUES ARE NOT ENUMERABLE