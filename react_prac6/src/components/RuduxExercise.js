import { createStore } from 'redux'
console.log("Redux 사용 준비");



// 사용할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
}

// 액션의 타임 생성
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션 생성 함수 정의
const increase = () => {
    return { type: INCREASE };
}

const decrease = () => {
    return { type: DECREASE };
}

const changeText = (text) => {
    return { type: CHANGE_TEXT, text };
}

const addToList = (item) => {
    return { type: ADD_TO_LIST, item };
}

// reducer - 위에 작성한 initalState와 action을 매개변수로 받아 분기문 작성
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return { ...state, counter: state.counter + 1 }

        case DECREASE:
            return { ...state, counter: state.counter - 1 }

        case CHANGE_TEXT:
            return { ...state, text: action.text }

        case ADD_TO_LIST:
            return { ...state, list: state.list.concat(action.item)}

        default:
            return state;
    }
}

// Store를 만드는 함수
const store  = createStore(reducer);

// 현재 store의 상태 확인
console.log(store.getState());

// Listener 설정
// store의 상태가 변경될 때 마다 호출되도록 하는 역할
const listener = () => {
    const state = store.getState();
    console.log(state);
}

// 구독 설정
// unSubScribe 할 때 마다 해당 파일에 작성된 내용을 불러온다.
const unSubScribe = store.subscribe(listener)   

// 액션 호출
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('데이터'));
store.dispatch(addToList({id: 1, text: '리듀서'}));