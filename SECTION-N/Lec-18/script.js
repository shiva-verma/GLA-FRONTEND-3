// let pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise1 resolved data');
//     },2000);  
// })

// let pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise2 resolved data');
//     },7000);   
// })

// console.log('start');
// async function handlePromise(){
//     console.log('Hello World');
//     let data1 = await pr;
//     console.log(data1);
//     console.log('console after resolved');
//     let data2 = await pr2;
//     console.log(data2);
// }
// handlePromise();
// console.log('End');

/*
At t = 0
   Start
   Hello world
   End
At t = 2
   promise1 resolved data
   console after resolved
At t = 7
   promise2 resolved data

*/

function pr(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise1 resolved data');
        },2000);  
    })

}

function pr2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise2 resolved data');
        },7000);   
    })

}


console.log('start');
async function handlePromise(){
    console.log('Hello World');
    let data1 = await pr();
    console.log(data1);
    console.log('console after resolved');
    let data2 = await pr2();
    console.log(data2);
}
handlePromise();
console.log('End');

/*
At t = 0
   Start
   Hello world
   End
At t = 2
   promise1 resolved data
   console after resolved
At t = 9
   promise2 resolved data

*/