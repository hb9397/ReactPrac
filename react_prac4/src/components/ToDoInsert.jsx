import React from 'react'

// react-icons 라이브러리의 MaterialDesign의 MdAdd 라는 아이콘을 사용한다.
// 다른 iocons를 사용할 거라면 https://react-icons.github.io/react-icons 에서 보고 지정
import {MdAdd} from 'react-icons/md'
import './ToDoInsert.scss'

const ToDoInsert = () => {
  return (
    /* className은 ToDoInsert.scss 파일에서 지정자 역할을 하는 클래스이름과 동일하게 한다. */
    <form className='ToDoInsert'>
        <input placeholder='할 일을 입력하세요'/>
        <button type='submit'><MdAdd/></button>
    </form>
  )
}

export default ToDoInsert