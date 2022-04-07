import { ADD_TODO, NEW_TODO, REMOVE_TODO, COMPLETE_TODO } from "../types"


export const AddTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const CreateNewTodo = (value) => ({
    type: NEW_TODO,
    payload: value
})

export const RemoveTodo =  (index) => ({
    type: REMOVE_TODO,
    payload: index
})

export const MarkComplete = (index) => ({
    type: COMPLETE_TODO,
    payload: index
})