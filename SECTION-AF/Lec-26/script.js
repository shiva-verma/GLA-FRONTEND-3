let inputBox = document.getElementById("inp");
let addBtn = document.getElementById("btn");
let list = document.getElementById("list")

function addTask(){
        let inpValue = inputBox.value
        
        let li = document.createElement("li");
        li.innerText = inpValue;

        list.appendChild(li);

        inputBox.value = "";

}

addBtn.addEventListener("click", addTask)