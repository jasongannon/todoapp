// todoView.mjs

export const renderTodos = (todos) => {
    const todoContainer = document.getElementById('todo-list');
    todoContainer.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
      const todoItem = document.createElement('li');
      todoItem.textContent = todo;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => {
        onDelete(index);
      };
      todoItem.appendChild(deleteButton);
      todoContainer.appendChild(todoItem);
    });
  };
  
  export let onDelete = () => {};
  export const setDeleteHandler = (handler) => {
    onDelete = handler;
  };
  