// useRef는 변수를 생성하거나 변수를 만들어서 DOM에 할당하기 위해서 사용한다.
// useCallback은 함수를 무조건 생성하는 것이 아니라 효율적으로 생성하기 위해서 사용한다.
import React, {useState, useRef, useCallback} from 'react'
import ToDoTemplate from './components/ToDoTemplate'
import ToDoInsert from './components/ToDoInsert'
import ToDoList from './components/ToDoList'

const App = () => {
  const [toDos, setToDos] = useState([
    {
      id:1,
      text: "HTML, CSS, JS",
      checked: true
    },
    {
      id:2,
      text: "Node.js",
      checked: true
    },
    {
      id:3,
      text: "React",
      checked: true
    },
    {
      id:4,
      text: "NEXT",
      checked: true
    },
    {
      id:5,
      text: "Spring",
      checked: true
    }
  ]);

  // 아이디를 위한 변수를 생성한다.
  const nextId = useRef(5);

  // 삽입을 처리하기 위한 함수
  // toDos에 변화가 생기면 함수를 만들지만 그렇지 않다면 기존 함수의 결과를 사용한다.
  const onClickInsertBtn = useCallback((text) => {
    const toDo = {
      id : nextId.current,
      text,
      checked: false
    }

    setToDos(toDos.concat(toDo));
    nextId.current += 1;
  }, [toDos])

  // 데이터 삭제 처리를 위한 함수
  const onClickRemoveBtn = useCallback((id) => {
    toDos.filter(toDo => (
      toDo.id !== id
      
    ))
    console.log(id)
  })

  return (
    <ToDoTemplate>
      <ToDoInsert onClickInsertBtn={onClickInsertBtn}/>
      {/* 샘플데이터 todDos useState를  toDos이름으로 ToDoList로 넘겨준다.*/}
      <ToDoList toDos={toDos} onClickRemoveBtn={onClickRemoveBtn}/>
    </ToDoTemplate>
  )
}

export default App