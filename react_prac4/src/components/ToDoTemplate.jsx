import React from 'react'
import './ToDoTemplate.scss'

// 상위 컴포넌트에서 넘겨준 props의 속성 중 children을 매개변수로 받는다.
const ToDoTemplate = ({children}) => {
  return (
    /* className은 ToDoInsert.scss 파일에서 지정자 역할을 하는 클래스이름과 동일하게 한다. */
    <div className='ToDoTemplate'>
        <div className='app-title'>일정관리</div>
        <div className='content'>{children}</div>
    </div>
  )
}

export default ToDoTemplate