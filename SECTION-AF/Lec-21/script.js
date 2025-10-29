//asynchronous vs synchronous Programming
// Synchronous
// code executes line by line

// console.log("Hello")

// function waitAsec(){
//     let currentTime = Date.now();
//     while(Date.now() - currentTime < 4000){

//     }
//     console.log("WaitAsec")
// }

// waitAsec();

// console.log("World")





//time taking task





//Asynchronous

// using below given function
// setInterval
// setTimeout
// Promises
// async/ await
// Callback function

// console.log("Hello")

setTimeout(function(){
    console.log("inside Settimeout")
}, 3000)


// console.log("World")


//Higher order function
function Calculator(){

}

// Callback function
function sum(){

}
Calculator(sum)


