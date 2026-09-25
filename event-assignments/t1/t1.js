// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
function addElement() { 
  const ul = document.querySelector("#div1")
  
  todoList.forEach(todo => {
  const li = document.createElement("li")
  const input = document.createElement("input")
  input.type = "checkbox";
  input.id = "todo-" + todo.id

  if (todo.completed) { 
    input.checked = true;
  }

// Adding button function
  input.addEventListener("change", function(){ 
    todo.completed = input.checked
    console.log(todoList);
  }) 
// Adding delete button function 
  const removing = document.createElement("button")

  removing.textContent = "Delete"

  removing.addEventListener("click", function(){
    todoList.splice(todoList.indexOf(todo), 1)

    li.parentNode.removeChild(li)

    console.log(todoList)

  })
  li.appendChild(removing);


// inserting list to the HTML
  const list = document.createElement("label");

  list.htmlFor = "todo-" + todo.id
  list.textContent = todo.task 

  li.appendChild(input);
  li.appendChild(list);

  ul.parentNode.insertBefore(li, ul)
})
}

// Adding function to add button in HTML 
  const addButton = document.querySelector(".add-btn");
  const dialog = document.querySelector("dialog");
  const form = document.querySelector("form");
  const textInput = document.querySelector("input[type='text']");

  addButton.addEventListener("click", function(){
    dialog.showModal();
  })

  form.addEventListener("submit", function(event){

    event.preventDefault();

    const newTodo = { 
      id: todoList.length + 1,
      task: textInput.value,
      completed: false
    }

    todoList.push(newTodo);
    console.log(todoList);
    dialog.close();

  })

addElement();