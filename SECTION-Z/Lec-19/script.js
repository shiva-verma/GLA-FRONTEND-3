// console.log("first");
// let intervalId = setInterval(()=>{
//             setTimeout(()=>{
//                 console.log("Fourth")
//             },3000)
// }, 2000);

// console.log("Third")

// setTimeout(()=>{
//     clearInterval(intervalId);
// }, 6000)

console.log("A");

setTimeout(() => {
    console.log("B");
    setTimeout(() => {
        console.log("C");
    }, 1000);
}, 2000);

let id = setInterval(() => {
    console.log("D");
    setTimeout(() => {
        console.log("E");
    }, 500);
}, 1500);

setTimeout(() => {
    console.log("F");
    clearInterval(id);
}, 4000);

console.log("G");





