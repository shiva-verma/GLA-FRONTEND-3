
//Asyn vs sync
//promise is the solution of callback hell 
//Promises = It is an object which hold future values for asynchronous operation

//executor function 

let promise2 = new Promise((resolve, reject)=>{
      reject("Prmoise rejected");
})

//consumer
//.then, .catch

promise2.then((res)=>{
        console.log(res);
}).catch((err)=>{
        console.log(err);
})
