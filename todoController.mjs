// todoController.mjs

import { addTodo, removeTodo, getTodos } from './todoModel.mjs';
import { renderTodos, setDeleteHandler } from './todoView.mjs';

const handleAddTodo = () => {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();
  if (todoText) {
    addTodo(todoText);
    renderTodos(getTodos());
    todoInput.value = '';
  }
};

const handleDeleteTodo = (index) => {
  removeTodo(index);
  renderTodos(getTodos());
};

export const init = () => {
  document.getElementById('add-todo').addEventListener('click', handleAddTodo);
  setDeleteHandler(handleDeleteTodo);
  renderTodos(getTodos());
};
