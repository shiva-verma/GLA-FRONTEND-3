//Array method
//map, filter, reduce, fill, some

//Map --> to transform each element of an array

// let arr = [1,2,3,4,5,6,7];

// function myMap(item){
//     return item * 3;
// }

// let result = arr.map(myMap);
// console.log(result)

//filter --> to filter values on condition basis

// let arr = [1,2,3,4,5,6,7];

// function myFilter(item){
//     return (item % 2 != 0);
// }

// let result = arr.filter(myFilter);
// console.log(result)


//reduce ---> to reduce any array into single value using some operation
// let arr = [1,2,3,4,5,6,7];

// function myReduce(acc, item){
//     console.log("acc" + "--->" + acc + "      " + "item" + "--->" + item)
//     return acc * item;
// }

// let result = arr.reduce(myReduce, 1);
// console.log(result)

const students = [
    {
        name:"Alice",
        scores:{
            math:90,
            english:80,
            science:70
        }
    },
     {
        name:"Bob",
        scores:{
            math:60,
            english:75,
            science:85
        }
    },
     {
        name:"Charlie",
        scores:{
            math:100,
            english:95,
            science:70
        }
    }
]


// Extract names of users who are active and older than 25.
const users = [
  { name: "Amit", age: 24, active: true },
  { name: "Ravi", age: 28, active: false },
  { name: "Neha", age: 30, active: true }
];

//filter
function myFilter(user){
    return (user.age > 25 && user.active);
}

let result = users.filter(myFilter).map((u)=>{
    return u.name;
})
console.log(result)



//Filter products with price > 500, then return their names in uppercase.
const products = [
  { name: "Phone", price: 800 },
  { name: "Mouse", price: 200 },
  { name: "Laptop", price: 1500 },
];

let filterP = products.filter((product)=>{
    return product.price > 500;
}).map((p)=>{
    return p.name.toUpperCase();
})

console.log(filterP);


