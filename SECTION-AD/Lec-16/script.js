//function - A block of code which can be used later

//function statement
function Sum(a, b){
    // console.log(a + b)
    return a+b;
}

// let returnValue = Sum(5, 6);
// console.log(returnValue);

// function expression
const Sum1 = function(a, b, c){
      return a + b + c;
}

// let res = Sum1(9, 8, 7);
// console.log(res)

// ananomys function - IIFE - Immedietly invoked function expression
// (function(){
//     console.log("hello");
// })()


//Arrow function
//rest operator
const sum3 = (a,b,...arg) => {
    let ans = 0;
    for(let value of arg){
        ans += value
    }
    return ans;
}

let res = sum3(9,8,10,1,13,4,55,6,7,5,5,4)
console.log(res)

