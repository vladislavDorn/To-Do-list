import uuid from 'uuid/v4';

const counter = uuid();

const initialTodos = [
    {
        id: -1,
        title: 'Learn React'
    },
    {
        id: -2,
        title: 'Learn Redux'
    },
    {
        id: -3,
        title: 'Build App'
    },
]

const todos = (state = initialTodos, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: counter,
                    title: action.payload
                }
            ];
            case 'DELETE_TODO':
                return state.filter((todos) => {
                    return todos.id !== action.payload
                });    
        default:
            return state    
    }
}

export default todos;