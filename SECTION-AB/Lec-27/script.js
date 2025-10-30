let input = document.getElementById("inp")
let button = document.getElementById("btn");
let list = document.getElementById("list");

function addTodo(){
    let inpValue = input.value;
    if(inpValue != ""){
        let li = document.createElement("li");
        li.classList.add("list-item");
        li.innerText = inpValue;
    

        let delButton = document.createElement("button");
        delButton.innerText = "Delete"
        delButton.classList.add("del-btn");

        let editButton = document.createElement("button");
        editButton.innerText = "Update"
        editButton.classList.add("edit-btn");

        //delete function
        function deleteItem(){
            list.removeChild(li);
        }

        delButton.addEventListener("click", deleteItem);

        li.appendChild(delButton);
        li.appendChild(editButton);

        list.appendChild(li);

        input.value = "";
  }
}

button.addEventListener("click", addTodo)