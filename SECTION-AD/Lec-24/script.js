// function promise1(a, b){
//     return new Promise((resolve, reject)=>{
//         if(a + b > 20){
//             resolve("Promise fullfilled");
//         }else{
//             reject("Promise rejected");
//         }
//     })
// }

// console.log(promise1())
// promise1(6, 19).then((res)=>{
//         console.log(res);
// }).catch((err)=>{
//         console.log(err)
// });


// let data = fetch("https://jsonplaceholder.typicode.com/posts");

// data.then((res)=>{
//         return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//         console.log(err)
// })



console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
}, 0);

Promise.resolve().then(() => {
  console.log(4);
});

console.log(5);
