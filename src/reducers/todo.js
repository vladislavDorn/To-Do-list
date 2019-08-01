import { ADD_TODO, DELETE_TODO, TOGGLE_DONE, TOGGLE_IMPORTANT } from '../actions/actionTypes';
import uuid from 'uuid/v4'


const initialTodos = [
    {
        id: -1,
        text: 'Learn react',
        done: true,
        important: false
    },
    {
        id: -2,
        text: 'Learn redux',    
        done: false,
        important: true
    },
    {
        id: -3,
        text: 'Build app',
        done: false,
        important: false
    }
]
const todo = (state = initialTodos, action) => {
    switch(action.type){
        case ADD_TODO:
            let counter = uuid();
            return [
                ...state,
                {
                    id: counter,
                    text: action.payload,
                    done: false,
                    important: false
                }
            ];
        case DELETE_TODO:
            return state.filter((todo) => {
                return todo.id !== action.payload
            });
        case TOGGLE_DONE:
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
              ); 
        case TOGGLE_IMPORTANT:
                return state.map((todo) =>
                todo.id === action.payload ? { ...todo, important: !todo.important } : todo
              ); 
            default:    
                return state
    }
}

export default todo;