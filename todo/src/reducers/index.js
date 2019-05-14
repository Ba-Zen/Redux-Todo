import { ADD_TODO, TOGGLE_TODO} from "../actions";


const initialState = {
    todos: [
        { value: 'Walk the dog', completed: false, id: 7908 },
        { value: 'Exercise', completed: false, id: 980780 }
    ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
        return {
            ...state,
            todos: [
                ...state.todos,
               { value: action.payload, completed: false}
            ]
        };
        case TOGGLE_TODO: 
        return {
            ...state,
             todos: state.todos.map(todo => 
            (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
                )
        }
        default: 
        return state;
    }
}


export default reducer;
