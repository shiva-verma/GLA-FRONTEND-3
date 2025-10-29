//Promises --> solution of callback hell

//promise ==> 

//executor function
let p1 = new Promise((resolve, reject)=>{
    // reject("Promise rejected");
    resolve("Promise fullfilled")
});


// consumer function
//.then, .catch
p1.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

//2nd method using await keyword

async function promiseResolve(){
    let result = await p1;
}

promiseResolve();
