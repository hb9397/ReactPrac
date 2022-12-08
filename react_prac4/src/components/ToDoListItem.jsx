import React, { useCallback } from 'react'
import './ToDoListItem.scss'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'
import cn from 'classnames';

const ToDoListItem = ({ toDo, onClickRemoveBtn, onClickCheckBoxToggle, style }) => {

    // ToDoList 로 부터 넘어온 데이터 중 text와 checked만 분해
    const { text, checked, id } = toDo;

    const onDelete = useCallback((e) => {
        const result = window.confirm(`${text}를 정말로 삭제 하시겠습니까?`);
        if (result) {
            onClickRemoveBtn(id);
        }
    }, [onClickRemoveBtn, id, text])

    return (
        <div className='ToDoListItem-virtualized' style={style}>
            <div className='ToDoListItem'>
                <div className={cn('checkbox', { checked })} onClick={(e) => { onClickCheckBoxToggle(id) }}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className='text'>{text}</div>
                </div>
                <div className='remove' onClick={onDelete}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}

export default React.memo(ToDoListItem)