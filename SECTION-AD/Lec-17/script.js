function Calculator(Addition, Subtraction, Multiplication, Division, a, b, operation){
       if(operation == "+"){
            return Addition(a, b); 
       }else if(operation == "-"){
           return Subtraction(a, b)
       }else if(operation == "*"){
           return Multiplication(a, b)
       }else if(operation == "/"){
           return Division(a, b)
       }
       return "Operation is not valid"
}

function Sum(a, b){
    return a + b;
}

function Sub(a, b){
    return a - b;
}

function Mul(a, b){
    return a * b;
}

function Div(a, b){
    return a / b;
}
let res = Calculator(Sum, Sub, Mul, Div, 8, 9, "~")
console.log(res);

//----------------------------------------------------------------//

function clousre(){
    let c = 10;
    return function (a, b){
        return a + b + c;
    }
}
let res3 = clousre();
let value5 = res3(9,9);
console.log(value5)