import React from 'react'
import ToDoListItem from './ToDoListItem'

import './ToDoList.scss'

const ToDoList = ({toDos, onClickRemoveBtn}) => {
    
  return (
    <div className='ToDoList'>
        {
            // App.js로 부터 넘어온 toDos를 map함수로 toDos의 요소 개수 만큼 출력하도록 수정
            toDos.map(toDo => (
                <ToDoListItem toDo={toDo} key={toDo.id} onClickRemoveBtn={onClickRemoveBtn}/>
            ))
        }
    </div>
  )
}

export default ToDoList