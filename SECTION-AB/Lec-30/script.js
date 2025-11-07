//throttling
let inputBox = document.getElementById("inp")
let defaultText = document.getElementById("default");
let throttleText = document.getElementById("throttle")

const updateThrottleText = throttle((text)=> {
        throttleText.textContent = text;
}, 4000)

inputBox.addEventListener("input", (e)=>{
        defaultText.textContent = e.target.value;
        updateThrottleText(e.target.value);
})

function throttle(cb, delay){
    let shouldWait = false;
    return function(...args){
        if(shouldWait) return;

        cb(...args)
        shouldWait = true;

        setTimeout(()=>{
            shouldWait = false;
        }, delay)
    }
}