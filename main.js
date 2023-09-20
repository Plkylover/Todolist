let btn = document.getElementsByTagName('button')[0]
let todo_container = document.getElementsByClassName('todo-container')[0]
let todos = document.getElementsByClassName("todo")
btn.addEventListener('click', ()=>{
  location.href = 'create.html'
})
if (localStorage.getItem("todos") !== null && localStorage.getItem("todos") !== undefined){
todo_container.innerHTML = localStorage.getItem("todos")
}
if (localStorage.getItem("todo") !== null && localStorage.getItem("todo") !== undefined){
todo_container.innerHTML += localStorage.getItem("todo")
localStorage.removeItem("todo")
}
localStorage.setItem("todos", todo_container.innerHTML)
for (let i = 0; i < todos.length; i++) {
  todos[i].addEventListener("click", ()=>{
    try{
    localStorage.setItem("todoTitle", todos[i].firstElementChild.innerHTML)
    localStorage.setItem("todoBody", todos[i].firstElementChild.nextElementSibling.innerHTML)
    location.href = 'details.html'
    }
    catch{
      
    }
  })
  todos[i].firstElementChild.nextElementSibling.nextElementSibling.addEventListener("click", ()=>{
    todos[i].remove()
    localStorage.setItem("todos", todo_container.innerHTML)
  })
}