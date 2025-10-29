//Async vs Synch

// Asynch = Parallel - 2 threads = time taking 
//Synch = single thread


// setTimeout
// setInterval
// PROMISES
// Callback function 
// Async await

//Eventloop

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


function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Delayed ${ms}`);
      resolve(ms);
    }, ms);
  });
}
async function myFunc() {
  console.log('Begin');

  const p1 = delay(200);
  const p2 = delay(100);

  console.log('After starting delays');

  const r2 = await p2;
  console.log('Got r2 =', r2);

  const r1 = await p1;
  console.log('Got r1 =', r1);

  console.log('End myFunc');
}
myFunc();

console.log('After calling myFunc');
