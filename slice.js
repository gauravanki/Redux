import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = { todos: [{ id: 1, text: "something" }] };
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: action.payload.id,
                text: action.payload.text,
            }
            return (state.todos.push(todo))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return (todo.id !== action.payload.id)
            });
            return (state.todos)
        },
    },
});
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducers