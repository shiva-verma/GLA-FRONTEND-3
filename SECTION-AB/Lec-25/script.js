// console.log(1);

// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3);
//   });
// }, 0);

// setTimeout(()=>{
//     console.log(6)
// }, 3000)

// Promise.resolve().then(() => {
//   console.log(4);
// });

// console.log(5);


// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(`Delayed ${ms}`);
//       resolve(ms);
//     }, ms);
//   });
// }
// async function myFunc() {
//   console.log('Begin');
//   const p1 = delay(200);
//   const p2 = delay(100);
//   console.log('After starting delays');
//   const r2 = await p2;
//   console.log('Got r2 =', r2);

//   const r1 = await p1;
//   console.log('Got r1 =', r1);

//   console.log('End myFunc');
// }
// myFunc();
// console.log('After calling myFunc');



for(var i = 0; i < 4; i++){
    setTimeout(()=>{
        console.log(i)
    }, 0)
}


// {
//    setTimeout(()=>{
//         console.log(i= 0)
//     }, 0) 
// }
// {
//    setTimeout(()=>{
//         console.log(i= 1)
//     }, 0) 
// }
// {
//    setTimeout(()=>{
//         console.log(i= 2)
//     }, 0) 
// }
// {
//    setTimeout(()=>{
//         console.log(i= 3)
//     }, 0) 
// }

// i = 4



const arr = [1,2,3,4,5,6]

const newArr = arr.map(item =>  item * 3);

const result = arr.filter(item => (item % 2) == 0)

console.log(newArr);

console.log(result);