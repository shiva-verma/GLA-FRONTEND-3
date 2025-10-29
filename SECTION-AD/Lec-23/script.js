//DOM Manipulation --- 

//spanish(book)--->download(4s) ---> parsing(language conversion)(5s)---> uploading(2s)

//promises == solution of callback hell

//executor function
let promise1 = new Promise((resolve, reject)=>{
        reject("Promise rejected");
});

//consumer
//.then, .catch

promise1.then((res)=>{
        console.log(res);
}).catch((err)=>{
        console.log(err);
});