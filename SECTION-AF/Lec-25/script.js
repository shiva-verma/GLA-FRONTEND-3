//Step-1
//How to select any html element from dom tree
// let title = document.getElementById("title")
// let title = document.getElementsByClassName("subtitle")
// console.log(title[1])
// let para = document.getElementsByTagName("p")

// let result = document.querySelector("p")
// let result = document.querySelectorAll("p")
// console.log(result)

//Step-2
//How to change content of any html element
let title = document.getElementById("title")
title.innerText = "WELCOME TO AMAZON"
title.innerHTML = "<h2>WELCOME TO AMAZON</h2>"
console.log(title)


//step-3
//How to apply css using javascript
title.style.color = "red";
title.style.backgroundColor = "grey";


//step-4
//what is event / how to apply eventlistners
//anything which happens on browser is know as event

let button = document.getElementById("btn");

function generateAlert(){
    alert("button clicked");
}
button.addEventListener("dblclick", generateAlert);