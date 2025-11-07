//Callback function & use of Callback function

//downloadBook --> parsing --> conersion ---> upload
// 4s                 2s          6s           2s

function downloadBook(Callback){
    setTimeout(()=>{
        console.log("Book downloded")
        Callback()
    }, 4000)
}

function parseBook(Callback){
    setTimeout(()=>{
        console.log("Book parsed")
        Callback()
    }, 2000)
}

function convertBook(Callback){
    setTimeout(()=>{
        console.log("Book converted")
        Callback()
    }, 6000)
}

function uploadBook(){
    setTimeout(()=>{
        console.log("Book uploded")
    }, 2000)
}

//Callback hell // pyramid of doom
downloadBook(()=>{
    parseBook(()=>{
        convertBook(()=>{
            uploadBook();
        })
    });
});


//Promise
//Executor function
let p = new Promise((resolve, reject)=>{
        // reject("Promise not completed");
        resolve("Promise completed");
});

//consumer
//.then, .catch

p.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
