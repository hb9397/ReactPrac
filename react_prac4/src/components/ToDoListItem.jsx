import React from 'react'
import '/ToDoListItem.scss'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons'

const ToDoListItem = () => {
  return (
    <div className='ToDoListItem'>
        <div className='checkbox'>
            <MdCheckBoxOutlineBlank/>
            <div className='text'>할 일</div>
        </div>
        <div className='remove'>
            <MdRemoveCircleOutline/>
        </div>
    </div>
  )
}

export default ToDoListItem