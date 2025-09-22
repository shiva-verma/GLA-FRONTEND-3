console.log("Hello")

function waitAsec(){
     let currentTime = Date.now()
     while(Date.now() - currentTime < 3000){
        console.log("good");
     }
     console.log("Waited 1 sec")
}
waitAsec()

console.log("world")