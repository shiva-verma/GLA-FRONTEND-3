//Array Methods

//map, filter, reduce, find , some


// multiply each element with 3

// map

// function Multiplybythree(item){
    //         return item * 3;
    // }
    
    // let result = arr.map(Multiplybythree)
    // console.log(result);
    
//filter
// let arr = [1,2,3,4,5,6,7];
    
// function myfilter(item){
//         return (item % 2) == 0;
// }

// let result = arr.filter(myfilter)
// console.log(result);

//reduce
// let arr = [1,2,3,4,5,6,7];
    
// function myreduce(acc, item){
//     // console.log("acc" + " ----> "+ acc + "         " + "item" + " -----> " + item);
//         return acc * item;
// }

// let result = arr.reduce(myreduce)
// console.log(result);

//find

// let arr = [1,2,3,4,5,6,7];
    
// function myfind(item, i){
//         if(item == "bag"){
//             return i;
//         }
// }

// let result = arr.find(myfind)
// console.log(result);


// 1. Total Cost of In-Stock Items
const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Phone", price: 20000, inStock: false },
  { name: "Tablet", price: 15000, inStock: true },
  { name: "Watch", price: 8000, inStock: true }
];

function myfilter(product){
      return product.inStock
}

function myreduce(acc, product){
        return acc + product.price;
}

let result1 = products.filter(myfilter)
console.log(result1);

let finalResult = result1.reduce(myreduce);
console.log(finalResult)

// 2. Average Age of Students Who Passed passing marks >= 50
const students = [
  { name: "Aman", marks: 78, age: 20 },
  { name: "Riya", marks: 45, age: 22 },
  { name: "Kabir", marks: 88, age: 19 },
  { name: "Neha", marks: 55, age: 21 }
];

