import React, {useState, useCallback} from 'react'

// react-icons 라이브러리의 MaterialDesign의 MdAdd 라는 아이콘을 사용한다.
// 다른 iocons를 사용할 거라면 https://react-icons.github.io/react-icons 에서 보고 지정
import {MdAdd} from 'react-icons/md'
import './ToDoInsert.scss'

const ToDoInsert = ({onClickInsertBtn}) => {
    // 입력된 데이터에 대한 state를 생성한다.
    const [value, setValue] = useState('')

    // 입력된 내용이 변경될 때 호출될 함수를 생성한다.
    const onChangeInput = useCallback((e) => {
        setValue(e.target.value);
    }, [value]);

    // form에서 submit 이벤트가 발생하면 호출될 함수를 생성한다.
    // form 안에서 submit 이벤트가 발생하지만 form 안에서 Enter를 입력해도 submit 이벤트가 발생한다.
    // form 없이 사용하면 키보드로 Enter를 입력했을 때 이벤트 처리를 따로 해야 submit이 발생하게 해야 하고 버튼을 눌렀을 때도 submit 이벤트를 처리해야한다.
    // 그러나 form 내부에 button type을 submit으로 했을 때 form에서 자동으로 enter의 submit 이벤트가 발생되기 때문에 한번만 처리하면 된다.
    // 주의 사항으로는 입력하는 태그요소가 많아지면 위의 사항은 고려해 보아야한다.
    // Ex> 구글과 네이버 로그인의 차이 -> 네이버의 로그인은 입력사항이 많아서 Enter 입력시 submit이 아니라 입력칸에 대해 알맞은 유효성 검사를 하게된다.

    const onSubmit = useCallback((e) => {
        
        const result = window.confirm(`추가할 내용: ${value}`);
        if(result === false){
            e.preventDefault();
            return;
        }

        // 데이터 삽입
        onClickInsertBtn(value);

        // input초기화
        setValue('');

        // 제공되는 기본 이벤트 처리 코드를 수행하지 않는다.
        // form의 submit이나 a의 link 이벤트는 화면 전체를 갱신하기 때문에 이전 내용을 모두 잃어버리기 때문에 기본 이벤트를 사용하지 않도록 처리한다.
        e.preventDefault();
    }, [onClickInsertBtn, value])

  return (
    /* className은 ToDoInsert.scss 파일에서 지정자 역할을 하는 클래스이름과 동일하게 한다. */
    /* form 태그 내부의 button은 type이 submit이기 때문에 자동으로 form태그의 onSubmit 이벤트를 불러온다. */
    <form className='ToDoInsert' onSubmit={onSubmit}>
        <input value={value} onChange={onChangeInput} placeholder='할 일을 입력하세요'/>
        <button type='submit'><MdAdd/></button>
    </form>
  )
}

export default ToDoInsert