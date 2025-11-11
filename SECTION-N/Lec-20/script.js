let inputBox = document.getElementById("inp");
let addBtn = document.getElementById("btn");
let list = document.getElementById("list");

function addItem(){
    let inputValue = inputBox.value;

    let li = document.createElement("li");
    li.textContent = inputValue;
    li.classList.add("list-item")

    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("del-btn")

    delBtn.addEventListener("click", ()=>{
        list.removeChild(li);
    });
    li.appendChild(delBtn);
    list.appendChild(li);
    inputBox.value = "";
}
addBtn.addEventListener("click", addItem);