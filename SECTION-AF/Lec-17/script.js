//function - A block of code that can be used later

//function statement
function sum(a, b){
    console.log(a + b);
    return "hello";
}

// let returnedValue = sum(9, 8);
// console.log(returnedValue)

//function expression

const mul = function(a, b){
       return a * b;
}

let res = mul(9,8);
console.log(res)


//ananomys function - IIFE
// (function(){

// })()

//Arrow function
// const sum3 = () => {

// }

function allSum(a, b, c, ...args){
    let ans = 0;
    for(let value of args){
        ans += value
    }
    return ans;
}

let result=allSum(3,4,5,7,8,9,4,4,5)
console.log(result)
