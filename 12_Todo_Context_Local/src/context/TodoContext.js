import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todoList : [
        {
            todo : "Todo Msg",
            id : 1,
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}
});

export const TodoProvider = () => TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext);
}