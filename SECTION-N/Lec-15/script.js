//Async vs Sync
//Sync
// console.log("hello")
// function waitAsec(){
//     let currentTime = Date.now();

//     while(Date.now() - currentTime < 3000){

//     }
//     console.log("Waited for A sec")
// }

// waitAsec();
// console.log("world")

//Asynchrnonous
//setTimeout
//SetInterval
//PROMISES
//Callback
//async / await

console.log("hello")

setTimeout(()=>{
    console.log("waited for 3 sec")
}, 3000)

let intervalId = setInterval(()=>{
    console.log("inside setInterval")
}, 1000)

setTimeout(()=>{
    clearInterval(intervalId);
}, 3000)

console.log("world");


