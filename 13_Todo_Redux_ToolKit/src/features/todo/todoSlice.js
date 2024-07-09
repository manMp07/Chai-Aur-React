import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList : [],
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        // name can be any
        addTodo : (state, action) => {
            const newTodo = {
                id : nanoid(),
                //text : action.payload.text
                text : action.payload
            }
            state.todoList.push(newTodo);
        }, 
        removeTodo : (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload)
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;