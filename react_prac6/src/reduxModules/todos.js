const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE';

// 액션 생성 함수 
let nextId = 1;

export const addToDo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
})

export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    id
})

const initalState = [];

export default function todos(state = initalState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);

        case ADD_TODO:
            return state.map(todo => todo.id === action.id ? 
                {...todo, done: !todo.done} : todo); 
        
        default:
            return state;
    }
}