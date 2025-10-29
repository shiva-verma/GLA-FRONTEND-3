// let arr = [45, "apple", "walk", "78", true];

// slice vs splice

//slice
// let arr1 = arr.slice(2, 5)
// console.log(arr1);

//splice

// console.log(arr)
// arr.splice(3, 2)

// console.log(arr);



// shallow copy vs Deep Copy
// let arr = [22, 34, 56, 78]

// let arr1 = ["walk", "sleep"]
// //address

// let arr2 = [...arr, ...arr1] //spread operator

// let arr3 = arr.concat(arr1);

// arr2.push("Drink");

// let result = arr1.includes("walk");
// console.log(result)

// console.log(arr);

// console.log(arr2);




// let cart = ["Mobile", "Purse", "Bag", "Laptop", "Jeans"]

// let idx = cart.indexOf("Bag");

// cart.splice(idx, 1);

// console.log(cart)


// Higher order function
function Calculator(){

}

//Callback function
function sum(){

}


Calculator(sum)


let arr = [1,2,3,4,5,6]
//map

function multi(item){
    return item * 3;
}

let result = arr.map(multi);