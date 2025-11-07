//Debouncing & throttling

//Debouncing -- function call after a particular period of inactivity
let inputBox = document.getElementById("inp");
let defaultText = document.getElementById("ntext")
let debouncedText = document.getElementById("dtext")

const updateDebounceText = debounce((text)=>{
    debouncedText.textContent = text
})

inputBox.addEventListener("input", (e)=>{
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value);
})


function debounce(cb, delay = 1000){
    let setTimer;
    clearTimeout(setTimer);
     return function(...args){
        setTimer = setTimeout(()=>{
            cb(...args)
        }, delay);
     }
}