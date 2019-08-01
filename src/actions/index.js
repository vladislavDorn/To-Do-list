import { ADD_TODO, DELETE_TODO, TOGGLE_DONE, TOGGLE_IMPORTANT } from './actionTypes';

let nextID = 2;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextID++,
        payload: text
    }
};
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
};
export const toggleDone = (id) => {
    return {
        type: TOGGLE_DONE,
        id
    }
};
export const toggleImportant = (id) => {
    return {
        type: TOGGLE_IMPORTANT,
        id
    }
};