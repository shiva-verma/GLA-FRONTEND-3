// Callback fn

function calculator(addition, subtraction, multiplication, division, a , operator, b){
      if(operator == "+"){
        return addition(a, b);
      }else if(operator == "-"){
        return subtraction(a, b);
      }else if(operator == "*"){
        return multiplication(a, b);
      }else if(operator == "/"){ 
        return division(a, b);
      }
      return "Invalid operation"
}
function addition(a, b){
    return a + b;
}
function subtraction(a, b){
    return a - b;
}
function multiplication(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}

// let res = calculator(addition, subtraction, multiplication, division, 18 , "=", 95);
// console.log(res);

function clouser(){
    let c = 20;
    return function(a, b){
        return a + b + c;
    }
}

let value = clouser();

let res = value(40, 30);

console.log(res);
