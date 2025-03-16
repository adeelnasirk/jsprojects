let input = document.querySelector('input')
let btn = document.querySelector('button')
let todoList = document.querySelector('.task-list')

btn.addEventListener('click', function(e){
    todo();
})

function todo(){
    if (input.value===''){
        alert ('Plase enter a todo task...')
    }
    else{
        let task_el = document.createElement('li');
        task_el.innerHTML= input.value;
        todoList.appendChild(task_el);
        let span = document.createElement('button');
        span.innerHTML=('delete');
        task_el.appendChild(span);                      //add chilld element to parent which task_el

    }

     input.value = "";
     saveData()
};

todoList.addEventListener('click', function(e){
    if(e.target.tagName==='LI'){                         //tagname eturns element name in uppercase           
        e.target.classList.toggle('completed');         //toggle add class if not availibale, remove it if already added
        saveData()
    }
    else if(e.target.tagName==='BUTTON'){
        e.target.parentElement.remove();                
        saveData()
    }
})

//TO save data in local storage, Local storage has 
/* localStorage.setItem(key, value) ->save data
    localStorage.getItem(key) -> get data
    localStorage.removeItem(key)-> remove data
                .clear -> clear all */

function saveData(){
    localStorage.setItem("Todos", todoList.innerHTML);
}

function showData(){
    todoList.innerHTML= localStorage.getItem("Todos");
}

showData()