// function sum(a, b){
//         return new Promise((resolve, reject)=>{
//             if(a + b > 20){
//                 resolve(`sum of ${a} & ${b} is ${a+b} which is greater than 20`)
//             }else{
//                 reject(`sum of ${a} & ${b} is ${a+b} which is less than 20`)
//             }
//         })
// }



// let promise1 = sum(8, 7);

// promise1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

function downloadBook(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("Book downloded")
            resolve();
        }, 4000)
    })
}

function parseBook(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Book parsed")
            resolve()
        }, 2000)
    })
}

function convertBook(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Book converted")
            resolve()
        }, 6000)
        
    })
}

function uploadBook(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Book uploded")
            resolve()
        }, 2000)
        
    })
}

// async function bookWebsite(){
//     try {
//         await downloadBook()
//         await parseBook()
//         await convertBook()
//         await uploadBook()
//     } catch (error) {
//         console.log(error)
//     }

// }

// bookWebsite()


// downloadBook()
// .then(parseBook)
// .then(convertBook)
// .then(uploadBook)
// .catch((err)=>{
//     console.log(err);
// })

// downloadBook()
// .then(()=>parseBook())
// .then(()=>convertBook())
// .then(()=>uploadBook())
// .catch((err)=>{
//     console.log(err);
// })


//axios, fetch

// let response = fetch('https://jsonplaceholder.typicode.com/comments')
// .then((res)=>{
//     res.json().then((data)=>{
//             console.log(data)
//     })
    
// })
// let response1 = fetch('https://jsonplaceholder.typicode.com/comments')
// .then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// })


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

  const p1 = delay(200); //promise
  const p2 = delay(100); //promise

  console.log('After starting delays');

  const r2 = await p2; //r2 = 100
  console.log('Got r2 =', r2);

  const r1 = await p1;
  console.log('Got r1 =', r1);

  console.log('End myFunc');
}

myFunc();

console.log('After calling myFunc');

/*
Begin
After starting delays
After Calling this function
Delayed 100
'Got r2 =', 100
Delayed 200
'Got r1 =', 200
End myFunc

*/