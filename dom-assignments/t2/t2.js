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

  const list = document.createElement("label");

  list.htmlFor = "todo-" + todo.id
  list.textContent = todo.task 

  li.appendChild(input);
  li.appendChild(list);

  ul.parentNode.insertBefore(li, ul)
})
}
addElement();