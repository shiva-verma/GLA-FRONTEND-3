// console.log("Good")

// //time taking task
// //asynchronous

// setTimeout(function(){
//     console.log("third")
// }, 3000)

// console.log("evening")




console.log("hello");
setTimeout(()=>{
    console.log("second")
}, 3000)

setTimeout(()=>{
        console.log("third")
},0)

console.log("fourth")

let intervalId = setInterval(function(){
    console.log("first")
}, 1000)

setTimeout(() => {
    clearInterval(intervalId);   
}, 5000);