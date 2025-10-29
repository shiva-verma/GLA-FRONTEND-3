// //tertiary operator

// if(a > b){
//     console.log("a is greater")
// }else{
//     console.log("b is greater")
// }

// let result = (a > b) ? "a is greater" : "b is greater"

// //loops 
// //for loop
// for(i = 0; i < n; i++){

// }

// //while loop

// while(condition){

// }


// //do while
// do {
    
// } while (condition);


// let arr = [23, 54,57,67, 89,54]

//for....of

// for (let element of arr) {
//     console.log(element)
// }


// //for....in
// for(let index in arr){
//     console.log(arr[index]);
// }

//forEach == callback function

//map == callback function


// Array = Collection of hetrogenous element

// let arr2 = new Array(7)
let arr = ["abcde", 67, true, {"name":"cdef", age:24}, ["walk", "sleep"]];

console.log(arr);

arr[4].push("Drink")

console.log(arr);

arr.pop()

console.log(arr);

// Shift vs unshift

arr.shift()

console.log(arr)

arr.unshift("apple");

console.log(arr);

//indexOf
let index = arr.indexOf(67)
console.log(index);

//lastIndexOf

//splice vs slice
