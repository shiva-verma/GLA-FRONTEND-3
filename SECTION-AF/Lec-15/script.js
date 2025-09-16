//splice vs slice
// let arr = [1, 3, 6, 9, "Apple", "Mango", "Drink"];

// let newArr = arr.slice(2, 6);

// console.log(newArr);
// console.log(arr);

// arr.splice(2, 3)

// console.log(arr);

//indexOf
// let idx = arr.indexOf("Mango")
// console.log(idx)


//shallow copy vs deep copy

let arr = [1, 3, 6, 9, "Apple", "Mango", "Drink"];
let arr2 = ["work", "meet","sleep"];

let arr5 = [...arr, ...arr2]

let arr6 = arr.concat(arr2)

arr2.push("walk");

// console.log(arr2)
// console.log(arr);

//Deep copy
//spread operator
let arr3 = [...arr];

arr3.push("sleep")

// console.log(arr2)
// console.log(arr);
// console.log(arr3)

let arr4 = arr.slice(0);

arr4.push("work");
console.log(arr2);

console.log(arr4)