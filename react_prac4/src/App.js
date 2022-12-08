// useRef는 변수를 생성하거나 변수를 만들어서 DOM에 할당하기 위해서 사용한다.
// useCallback은 함수를 무조건 생성하는 것이 아니라 효율적으로 생성하기 위해서 사용한다.
import React, { /* useState, */ useRef, useCallback, useReducer } from 'react'
import ToDoTemplate from './components/ToDoTemplate'
import ToDoInsert from './components/ToDoInsert'
import ToDoList from './components/ToDoList'

const createBulkToDos = () => {
  const array = [];

  for (let i = 1; i <= 2000; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    });
  }
  return array;
}

// state를 조작할 reducer 함수를 생성한다.
const toDoReducer = (toDos, action) => {
  // 분기문 작성
  switch (action.type) {
    case 'Insert':
      return toDos.concat(action.toDo);

    case 'Remove':
      return toDos.filter(toDo => toDo.id !== action.it);

    case 'Toggle':
      return toDos.map(toDo => toDo.id === action.id ?
        {...toDo, checked : !toDo.checked} : toDo)

    default :
        return;
    }
}

const App = () => {
  // useState에 데이터를 생성하는 함수를 대입할 때 함수 호출 구문을 대입하면 데이터가 만들어질 때 마다 리랜더링한다.
  // 이 때 이를 방지하기 위해서 함수이름만을 대입해야 함수를 전부 수행하고 1번만 리랜더링을 수행하게 된다.
  // 즉, const [A, SetA] = useState(Function())과 같이 작성하면 데이터가 새롭게 만들어 질 때마다 리랜더링 되기 때문에 ...=useState(Function)과 같이 작성하는 것이 좋다.
  //const [toDos, setToDos] = useState(createBulkToDos);
  
  // useReducer로 접근하는 설정, 첫번째는 매개변수는 호출될 함수 두번째는 매개변수의 초기값, 세번째는 호출할 메서드로 반환하는 값이 초기값으로 설정된다.
  // 반환될 결과는 state 이름과 state를 수정할 함수다.
  const [toDos, dispatch] = useReducer(toDoReducer, undefined, createBulkToDos)

  // 아이디를 위한 변수를 생성한다.
  const nextId = useRef(2001);

  // 삽입을 처리하기 위한 함수
  // toDos에 변화가 생기면 함수를 만들지만 그렇지 않다면 기존 함수의 결과를 사용한다.
  const onClickInsertBtn = useCallback((text) => {
    const toDo = {
      id: nextId.current,
      text,
      checked: false
    }

    // 함수형 업데이트
    //setToDos(toDos => toDos.concat(toDo));

    // Reducer을 이용한 함수 업데이트 처리
    dispatch({type: 'Insert', toDo})

    nextId.current += 1;
  }, []);

  // 데이터 삭제 처리를 위한 함수
  const onClickRemoveBtn = useCallback((id) => {
    /* setToDos(toDos => toDos.filter(toDo => (
      toDo.id !== id
    ))); */

    dispatch({type: 'Remove', id});
  }, []);

  // 데이터 수정을 위한 함수
  // toDo의 id 값과 매개변수로 받은 id가 일치하면 checked값을 변경하고 그렇지 않을 때는 그대로 둔다.
  const onClickCheckBoxToggle = useCallback((id) => {
    //setToDos(toDos => toDos.map(toDo => toDo.id === id ? { ...toDo, checked: !toDo.checked } : toDo))
    dispatch({type: 'Toggle', id});
  }, []);

  return (
    <ToDoTemplate>
      <ToDoInsert onClickInsertBtn={onClickInsertBtn} />
      {/* 샘플데이터 todDos useState를  toDos이름으로 ToDoList로 넘겨준다.*/}
      <ToDoList toDos={toDos} onClickRemoveBtn={onClickRemoveBtn} onClickCheckBoxToggle={onClickCheckBoxToggle} />
    </ToDoTemplate>
  )
}

export default App