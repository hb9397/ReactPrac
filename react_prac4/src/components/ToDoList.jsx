import React, { useCallback } from 'react'
import ToDoListItem from './ToDoListItem'
import './ToDoList.scss'
import { List } from 'react-virtualized'

const ToDoList = ({ toDos, onClickRemoveBtn, onClickCheckBoxToggle }) => {

    // 하나의 항목을 랜더링하기 위한 함수를 생성한다.
    const rowRenderer = useCallback(({ index, key, style }) => {
        // 출력할 데이터를 가져온다
        const toDo = toDos[index];
        console.log(toDo.length)
        return (
            <ToDoListItem
                toDo={toDo}
                key={key}
                onClickRemoveBtn={onClickRemoveBtn}
                onClickCheckBoxToggle={onClickCheckBoxToggle}
                style={style} />
        )
    }, [onClickRemoveBtn, onClickCheckBoxToggle, toDos])

    return (
        <List className='ToDoList'
            width={512} // 항목의 넓이
            height={513} // 항목이 들어갈 list의 전체의 높이
            rowCount={toDos.length} // 전체 데이터 개수
            rowHeight={57} // 항목의 높이
            rowRenderer={rowRenderer} // 행을 만들어줄 함수 
            list={toDos}
            style={{ outline: 'none' }}>
        </List>
    )
}

export default ToDoList