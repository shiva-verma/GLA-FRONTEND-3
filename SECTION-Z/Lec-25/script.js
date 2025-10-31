let inputBox = document.getElementById("inp");
let addBtn = document.getElementById("btn");
let list = document.getElementById("list");


function addTodoTask(){
   let inputValue = inputBox.value
   
   const li = document.createElement("li");
   li.innerText = inputValue;
   li.classList.add("list-item")

   const delBtn = document.createElement("button");
   delBtn.innerText = "Delete";
   delBtn.classList.add("delBtn")
   
   const editBtn = document.createElement("button");
   editBtn.innerText = "Edit";
   editBtn.classList.add("editBtn")

   function updateItem(){
      if(editBtn.innerText === "Edit"){
         editBtn.innerText = "Save"
         li.contentEditable = true;
         li.focus();
      }else{
         editBtn.innerText = "Edit"
         li.contentEditable = false;
      }
   }

   editBtn.addEventListener("click", updateItem);

   function removeItem(){
        list.removeChild(li);
   }

   delBtn.addEventListener("click", removeItem);

   li.appendChild(delBtn);
   li.appendChild(editBtn);
   list.appendChild(li);

   inputBox.value = ""
}

addBtn.addEventListener("click", addTodoTask)
