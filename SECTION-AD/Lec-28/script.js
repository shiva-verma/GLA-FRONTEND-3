let input = document.getElementById("inp")
let button = document.getElementById("btn")
let list = document.getElementById("list")

function addToDo(){
    let inpValue = input.value;
    let li = document.createElement("li");
    li.innerText = inpValue;
    //delete
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete"
    deleteBtn.classList.add("delBtn");

    li.appendChild(deleteBtn);
    //edit
    let editBtn = document.createElement('button');
    editBtn.innerText = "Edit"
    editBtn.classList.add("editBtn");

    li.appendChild(editBtn);

    editBtn.addEventListener("click", ()=>{
        
    })
    
    deleteBtn.addEventListener("click", ()=>{
        list.removeChild(li);
    })

    list.appendChild(li)
    input.value = ""
}

button.addEventListener("click", addToDo)