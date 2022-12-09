// 타입 생성 - 매개변수를 받아서 증감, INCREASE, DECREASE
const SET_DIFF = 'couter/SET_DIFF';// counter 라는 접두어를 붙혀서 한묶음임을 암시
const INCREASE = 'couter/INCREASE';
const DECREASE = 'couter/DECREASE';

// 액션 생성 함수
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태 선언
const initalState = {
    number: 0,
    diff: 1
}

// 리듀서 
export default function counter(state = initalState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {...state, diff: action.diff};

        case INCREASE:
            return{...state, number: state.number + state.diff};

        case DECREASE:
            return{...state, number: state.number - state.diff};

        default:
            return state;
    }
}