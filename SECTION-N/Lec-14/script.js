//map, filter, reduce, forEach, some, fill


//MAP --> Transform of array

// let arr = [23, 45, 67, 78];

// function myMap(item){
//     return item * 3;
// }

// let result = arr.map(myMap);

// console.log(result)

//filter
// let arr = [23, 45, 67, 78];

// function myfilter(item){
//     return (item % 2 == 0);
// }

// let result = arr.filter(myfilter);

// console.log(result)

//reduce

// let arr = [23, 45, 67, 78];

// function myReduce(acc, item){
//     console.log("acc" + "-->" + acc + "item" + "--->"+ item);
//     return acc * item;
// }

// let result = arr.reduce(myReduce, 100);

// console.log(result)

//Objects ---> storage for key:value pair

//Object literals 
// {}

//Object class
// new Object();


const person = {
    name:"Abcd",
    age:25,
    job:{
        jobTitle:"PE",
        salary:50000,
        YOE:3,
        project:{
            projectTitle:"GenAI"
        }
    }
}

//values insert


//values access
console.log(person.job.YOE);
console.log(person["job"]["salary"]);

// Object.freeze(person);

person.job.jobdescription = "dsbjsdbsjdf";

// console.log(person)

// loop

// for..in

// for(let key in person){
//     console.log(person[key]);
// }

// object is not iterable
// for(let value of person){
//     console.log(value)
// }

//  let result1 = Object.hasOwn(person, "sdfg")
//  console.log(result1);


//function
//function statement

// Sum(7,8)

// function Sum(a, b){
//     //   console.log(a + b)
//     console.log(this)
// }

//function expression

// const Mul = function(a, b){
//     console.log(a*b)
// }
// Mul(9,8);
//Ananomys function --cleanup 

// IIFE--> Imediately invoke function expression
// (function(a, b){
//     console.log(a - b)
// })(99, 15)

//arrow function
const div = () => {

}

//this keyword --> function statement, function expression and ananomys function 
// have their own this keyword;

//arrow function doesn't have their own this keyword



// rest
// function calculator(...c, d){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// calculator(10, 20, 24, 30, 40,450, 60, 70)

//clouser -- abstraction
function outer(){
    // lexical envirnoment
    let c = 30;
    return function inner(a, b){
        return a + b+ c;
    }
}

// let result = outer();
// let output1 = result(10, 20);
// console.log(output1)

// Currying
function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

let value = add(10)(20)(30);

// let result1 = add(10);
// let result2 = result1(20);
// let final= result2(30);








