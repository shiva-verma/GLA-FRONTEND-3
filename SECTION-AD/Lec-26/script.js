//DOM = document object model - HTML Tree

//Each node represent a element

//Step-1
//selecting a element from the Dom tree
// let title1 = document.getElementById("title")
// let title = document.getElementsByClassName("title");
let btn = document.getElementById("btn")

let t3 = document.getElementById("title")
// let t4 = document.querySelector("#title")
// let t5 = document.querySelector("h2")
console.log(t3)
//Step-2
//changing content

// t3.textContent = "WELCOME TO FLIPKART"
// t3.innerHTML = "<h1>WELCOME TO FLIPKART</h1>"

//Step-3
//How to change style
t3.style.color = "red";
t3.style.backgroundColor = "black"


//step-4
//how to event listeners
btn.addEventListener("click", ()=>{
    alert("button clicked")
})
