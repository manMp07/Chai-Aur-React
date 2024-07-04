import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (todo) => {
        setTodoList(prev => [todo, ...prev] )
    }

    const updateTodo = (id, todo) => {
        setTodoList(prev => prev.map((todoItem) => todoItem.id === id ? todo : prev))
    }

    const deleteTodo = (id) => {
        setTodoList( prev => prev.filter( (todoItem) => todoItem.id !== id))
    }

    const toggleTodo = (id) => {
        setTodoList(prev => prev.forEach((todoItem) => {
            if(todoItem.id === id)
                todoItem.completed = !todoItem.completed;
        }))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.get("todos"))

        if(todos && todos.length > 0)
            setTodoList(todos);
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])

    return (
        <TodoProvider value = {{todoList, addTodo, updateTodo, deleteTodo, toggleTodo}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        <TodoItem />
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default App;