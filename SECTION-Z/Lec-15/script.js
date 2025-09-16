let arr = [1, 2, 5, 10, "fiffty", "hundred"];

console.log(arr);

arr.push("Five hundred");

console.log(arr)

arr.pop()

console.log(arr)

arr.unshift("Rupees");
console.log(arr);

arr.shift();
console.log(arr)

//indexOf
let idx = arr.indexOf("fiffty");
console.log(idx)

//splice vs slice

//slice
let newArr = arr.slice(2,5);
console.log(newArr);
console.log(arr)

//splice
arr.splice(4, 2);

console.log(arr);

let res = arr.includes(100)
console.log(res)

//shallow copy -copy address vs deep copy - copy values

let arr1 = ["drink", "sleep", "walk", "Code"];
let arr2 = arr1;

arr2.push("repeat");

console.log(arr1)
console.log(arr2)
