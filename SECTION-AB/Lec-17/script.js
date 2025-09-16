// let arr = [1, 2,"Walk","Drink", true, ["Eat", "Code", "Repeat"]];
// console.log(arr);

// arr.push("Work");
// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.unshift("Work")

// console.log(arr);

// arr.shift();

// console.log(arr);


// // splice vs slice
// //slice
// let newArr = arr.slice(2, 5);
// console.log(newArr)
// console.log(arr);

// //splice
// arr.splice(2, 2);

// console.log(arr)

//Shallow copy - copy address vs Deep copy - copy values
let arr3= [1, 2,"Walk","Drink", true, ["Eat", "Code", "Repeat"]];
let arr4 = arr3

arr4.push("work");

// console.log(arr3);
// console.log(arr4);

let arr5 = arr3.slice(0);

arr5.push("roam");

console.log(arr3)
console.log(arr4)
console.log(arr5);

let arr6 = [...arr3];

arr6.push("Dam");

console.log(arr3)
console.log(arr6)

//indexOf

let idx = arr3.indexOf(true)
console.log(idx)

//includes

let res = arr3.includes("Drinking");
console.log(res);


