const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText !== '') {
    const newTodo = createTodoElement(newTodoText);
    todoList.appendChild(newTodo);
    newTodoInput.value = '';
  }
});

function createTodoElement(todoText) {
  const todoElement = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      todoTextElement.style.textDecoration = 'line-through';
      todoList.appendChild(todoElement);
    } else {
      todoTextElement.style.textDecoration = 'none';
      todoList.insertBefore(todoElement, todoList.firstChild);
    }
  });
  const todoTextElement = document.createElement('span');
  todoTextElement.textContent = todoText;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-todo');
  deleteButton.addEventListener('click', () => {
    todoElement.remove();
  });
  todoElement.appendChild(checkbox);
  todoElement.appendChild(todoTextElement);
  todoElement.appendChild(deleteButton);
  return todoElement;
}