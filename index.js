let input = document.getElementById('input');
let button = document.getElementById('add')
let todoList = document.getElementById('todolist')

let todos = [];
 button.addEventListener('click',()=>{
    if(input.value === ''){
        alert("write something it's empty!");
    }
    else{
        todos.push(input.value)
        addtodo(input.value)
       
    }
    input.value=''
    saveData();
 })

function addtodo(todo){
    let li = document.createElement('li');
    li.innerText=todo;
    todoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
      
    // para.addEventListener('click',()=>{
    // para.style.textDecoration = "line-through"
    // })
    
}
todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data",todoList.innerHTML);
}
function showTask(){
    todoList.innerHTML=localStorage.getItem("data");
}
showTask();