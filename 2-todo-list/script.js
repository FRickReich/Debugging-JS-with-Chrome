const todoList = document.querySelector('.todo_list');
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');

todoButton.addEventListener("click", handleAddItemClick)
todoList.addEventListener("click", checkItemFromList)

function handleAddItemClick(event)
{
    event.preventDefault();

    addItemToList(todoInput.value);
    
    todoInput.value = "";
}

function addItemToList(value)
{
    const todoContentDiv = document.createElement('span');
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo_item');
    
    todoContentDiv.innerHTML = value;
    todoContentDiv.classList.add('todo_text');

    newTodo.appendChild(todoContentDiv);

    if(todoInput.value === "")
    {
        return null
    }

    const completedButton = document.createElement('button');
    completedButton.classList.add("check_button");
    completedButton.innerHTML = "✓";
    
    newTodo.appendChild(completedButton);

    todoList.appendChild(newTodo);
}

function checkItemFromList(event)
{
    const item = event.target;

    if(item.classList[0] === "checkbutton")
    {
        const todo = item.parentElement;

        todo.classList.toggle("completed");
    }
}
