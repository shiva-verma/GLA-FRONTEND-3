function sum (){
    let a;
    var b = {};
    const c = null;
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
}

// console.log(typeof(sum))
let value = 5 -"abcd"
console.log(typeof(value));

//for loop
// for(let i = 0; i < n; i++){

// }

//for....of
// let arr = [11,12,43,74,85,86,79]
// for(let val of arr){
    // console.log(val)
// }

//for....in
// for(let key in arr){
//     console.log(arr[key])
// }

//while
// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++
// }

//do-while
// do {
    
// } while (condition){

// };

//if-else
// if (condition) {
    
// } else if(condition) {
    
// }else{

// }

//Array
const arr = [1, "abcd", true, null, undefined, ["zxf",9, true]];

for (let element of arr) {
    console.log(element)
}