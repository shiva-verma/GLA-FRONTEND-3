let names = "abcde";
let age = 24.5;
let flag = true;

//null vs undefined

let salary;
let jobTitle = null;

const arr = [];
const person = {};

const sum = function(){

}

// console.log(typeof(age));
// console.log(typeof(names));
// console.log(typeof(flag));
// console.log(typeof(salary));
// console.log(typeof(jobTitle));
// console.log(typeof(arr));
// console.log(typeof(person));
// console.log(typeof(sum));

//operators

let value = 5 + 6 + "abcd"

let value2 = "xyz" + 8 + 7

console.log(value); 
console.log(value2);


let value3 = 56 - "45";
// console.log(typeof(value3))

let value4 = "34"/0;
// console.log(value4);

let value5 = 0 /45;
// console.log(value5);

let res = (6 > 7) | (8 > 4)
// console.log(res);

let res2 = 5 == "5"; // '==' only checks values while '===' also checks datatype
// console.log(res2);

let res4 = +[]
// console.log(res4)

let re5 = 6 ^ 7 ^ 8 ^ 7 ^ 6
console.log(re5)


//loops

//for loop
// for(let i = 0; i < m; i++){
//     console.log(i);
// }

//while
// let i  = 0;
// while(i < n){
//     console.log(i);
//     i++;
// }

//dowhile
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < n);


const arr3 = [33,44,55,66,77,88,99];
//for...of
for(let values of arr3){
//    console.log(values);
}

//for...in
for(let index in arr3){
    // console.log(index + " --> " + arr3[index])
}

// if (condition) {
    
// } else if(condition) {
    
// } else{

// }

let a = 15;
let b = 30;

// if(a > b){
//     console.log(a);
// }else{
//     console.log(b);
// }

let result = a > b ? a : b
console.log(result);

