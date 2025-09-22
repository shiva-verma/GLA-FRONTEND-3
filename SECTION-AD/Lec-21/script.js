// console.log("second")

// let intervalId = setInterval(()=>{
//             setTimeout((x) => {
//                     console.log(x)
//             }, 3000, "first");
// }, 2000)

// setTimeout(()=>{
//         clearInterval(intervalId);
// }, 6000)

// console.log("fourth");

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
