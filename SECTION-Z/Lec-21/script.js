//asynchronous task --- time taking

//download(2s) ---> parse(convert)(5s) --> upload(3s);


// function downloadBook(){
//     setTimeout(()=>{
//         //downloading
//         const book = fetch("url");
//     }, 2000)
// }

// function parseBook(){
//     setTimeout(()=>{
//         ///conversion
//     }, 5000)
// }
// function uploadBook(){
//     setTimeout(()=>{
//         ///uploading
//     }, 3000)
// }

//callback hell
//pyramid of doom
// downloadBook("url", function(){
//         const book = fetch("url");

//             parseBook(book, function(){
//                     //parsing
//                     let convertedBook = convert(book);
//                     console.log("Book converted into english");

//                     uploadBook(convertedBook, function(){
//                         //uploading
//                         setTimeout(()=>{
//                             upload(convertedBook);
//                         }, 2000)
//                     })
//         })

// });

//Question Ice-Cream shop
//Menu(2s) ---> order place(4s) ---> choose topping & flavour(3s) --> processs(5s) ---> serve(1s)

function readMenu(callback){
    setTimeout(()=>{
        console.log("Read Menu")
        callback();
    }, 2000)
}
function orderPlace(callback){
    setTimeout(()=>{
        console.log("Place your order")
        callback();
    }, 4000)
}
function ChooseTopping(callback){
        setTimeout(()=>{
            console.log("choose your topping")
            callback();
        }, 3000)
}
function process1(callback){
        setTimeout(()=>{
            console.log("order is prepared")
            callback();
        }, 5000)
}
function serve(){
     setTimeout(()=>{
        console.log("order served")
     }, 1000)
}

// readMenu(()=>{
//     orderPlace(()=>{
//         ChooseTopping(()=>{
//             process1(()=>{
//                 serve();
//             })
//         })
//     })
// })



//solution of callback hell
//promises = It is a container which hold future result of asynchronous task

//executor function
// let p = new Promise((resolve, reject)=>{
//        reject("Doesn't have enough money")
//     //    resolve("Promise fullfilled");
// });

//consumer
//.then, .catch


// p.then((res)=>{
//         console.log(res);
// }).catch((err)=>{
//         console.log(err);
// })


//fetching data

// let data = fetch("https://jsonplaceholder.typicode.com/posts")

// data.then((res)=>{
//     let newRes = res.json(); //time taking task
//     newRes.then((data12)=>{
//         console.log(data12)
//     })
// }).catch((err)=>{
//     console.log(err)
// })

// data.then((res)=>{
//     return res.json()
// }).then((res2)=>{
//     console.log(res2)
// }).catch((err)=>{
//     console.log(err)
// })

// async await

async function getData(){

    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let res1 = await response.json();
    console.log(res1)
}

getData();



