// console.log("Hello")

// function WaitAsec(){
//     let currentTime = Date.now();
//     while(Date.now() - currentTime < 5000){

//     }
//     console.log("waited 1 Sec");
// }
// WaitAsec();


// setTimeout(function(){
//     console.log("waited 3 sec");
// }, 3000)

// console.log("World");


// console.log("first")

// setTimeout(function(){
//     console.log("second");
// }, 3000);


// setTimeout(()=>{
//     console.log("fourth")
// }, 3000)

// console.log("Third");



for(var i = 0; i < 4; i++){
     setTimeout((i)=>{
        console.log(i);
     }, 1000, i)
}





