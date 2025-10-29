let input = document.getElementById("inp")
let button = document.getElementById("btn")
let list = document.getElementById("list")

function addToDo(){
    let inpValue = input.value;
    let li = document.createElement("li");
    li.innerText = inpValue;
    list.appendChild(li)
    input.value = ""
}

button.addEventListener("click", addToDo)