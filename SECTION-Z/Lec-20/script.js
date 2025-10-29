//Callback fn - functions which is used as an argument to another function

//Higher order function - HOF
function Calculator(operation1, operation2, operation3, operation4){
        console.log(operation3(99, 88));
}

//callback function
function addition(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function multi(a, b){
    return a * b;
}
function divi(a, b){
    return a / b;
}

Calculator(addition, sub, multi, divi);