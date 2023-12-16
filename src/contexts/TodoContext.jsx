import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo-1",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
}); //context

export const useTodo = () => {
  return useContext(TodoContext); //refrence
};

export const TodoProvider = TodoContext.Provider; //provider
