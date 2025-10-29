//DOM Manipulation 
//DOM ---> Document Object Model


//Step-1
// How to Select html element from dom tree

// let result = document.getElementById("title");

// let result = document.getElementsByClassName("title");

// let btn = document.getElementsByTagName("button")

// let result = document.querySelector(".title");

// let result = document.querySelectorAll(".title");

// console.log(result);

//Step-2
//How to change content of any particular element

let title = document.getElementById("title")
console.log(title);


// title.innerText = "<h5>WELCOME TO AMAZON</h5>"

title.innerHTML = "<h5>WELCOME TO AMAZON</h5>"

//Step-3
// How to style any element in js

title.style.color = "red";
title.style.backgroundColor = "black"

//Step-4
//how to add eventlistners/ what is event

let btn = document.getElementById("btn");

btn.addEventListener("dblclick", ()=>{
    alert("button clicked");
})