//DOM Manipulation
//DOM ---> Document Object Model -- HTML TREE

//Step 1.
//How to select element from dom tree
// let h1 = document.getElementsByTagName("h1");

// let h1 = document.getElementsByClassName("title")

let h1 = document.getElementById("title");
let btn = document.getElementById("btn");

// let h1 = document.querySelector(".title")

// let h1 = document.querySelectorAll(".title")
console.log(h1);


//Step 2.
//How to change content of any element
// h1.innerText = "<h1>WELCOME TO FLIPKART</h1>"
// h1.innerHTML = "<h1>WELCOME TO FLIPKART</h1>"
// textContent


//step 3.
//How to style any element using js
h1.style.color = "red"
h1.style.backgroundColor = "black"


//Step 4.
//What is events/ How to apply eventlistners
function action(){
    alert("button clicked")
}
btn.addEventListener("dblclick", action)




