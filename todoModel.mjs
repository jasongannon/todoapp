// todoModel.mjs

const todoList = [];

export const addTodo = (todo) => {
  todoList.push(todo);
  return todoList;
};

export const removeTodo = (index) => {
  todoList.splice(index, 1);
  return todoList;
};

export const getTodos = () => [...todoList];
