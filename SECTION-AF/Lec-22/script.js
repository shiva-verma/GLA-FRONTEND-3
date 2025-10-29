//Async vs Synch

// setInterval
// setTimeout
// Promises
// async/ await
// Callback function



// setTimeout(()=>{
//     console.log("inside timeout")
// }, 3000)


// let intervalId = setInterval(()=>{
//     console.log("inside setInterval")
// }, 1000)


// setTimeout(()=>{
//     clearInterval(intervalId);
// },10000)


//Callback function

// function calculator(){
   
// }

// function sum(){

// }
// calculator(sum);


///icecream parlour

//Menu read ---> order --> choose flavour & topping ---> processing ---> serve
// 3s             2s          2s                            5s              2s


function readMenu(Callback){
    setTimeout(()=>{
        console.log("Menu read successfully");
        Callback()
    }, 3000)
}

function order(Callback){
    setTimeout(()=>{
        console.log("Order placed successfully");
        Callback()
    },2000)
}

function chooseTopping(Callback){
    setTimeout(()=>{
        console.log("choose topping");
        Callback()
    }, 2000)
}

function processing(Callback){
    setTimeout(()=>{
        console.log("order is under preparation");
        Callback()
    }, 5000)
}
function serve(){
    setTimeout(()=>{
        console.log("order served");
    }, 2000)
}

//callback hell
readMenu(()=>{
    order(()=>{
        chooseTopping(()=>{
            processing(()=>{
                serve();
            })
        })
    })
})


