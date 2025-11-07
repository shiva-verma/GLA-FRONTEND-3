//Debouncing --> Executes the function only after a period of inactivity

let input = document.getElementById("input");

function debounce(func, delay){
    let timer;
    //rest operator
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args), delay
        });
    }
}

function showText(text){
    console.log("User Stopped typing:", text)
}

const deBouncedInput = debounce(showText, 3000)

input.addEventListener("input", (e)=>{
        deBouncedInput(e.target.value);
})
//throttling ---> Executes the function at most once every fixed time interval

