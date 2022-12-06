import React, {useState, useRef} from 'react'

const FuncRef = () => {
    const [userName, setUserName] = useState("")
    const [nickName, setNickName] = useState("")

    // react에서 다른 component나 DOM을 참조할 수 있는 변수를 생성
    const nameInput = useRef();


    // input에 입력된 값으로 useState의 속성의 값들을 전달하는 함수 
    const onchangeUserNameInput = (e) => {
        setUserName(e.target.value)
    }

    const onchangeNickrNameInput = (e) => {
        setNickName(e.target.value)
    }

    const onClickResetBtn = (e) =>{
        alert(`name : ${userName}\nnickname : ${nickName}`)
        setUserName("");
        setNickName("")
        
        // useRef를 이용해 이름 입력란으로 focus 설정
        nameInput.current.focus();
    }

  return (
    <div>
        {/* 하나의 useState에 2개 이상의 속성을 다룬다면 사용할 tag에 name 속성의 값을 useState의 속성이름과 매칭 시킨다. */}
        <input name='username' type='text' value={userName} onChange={onchangeUserNameInput} ref={nameInput}/><br/>
        <input name='nickname' type='text' value={nickName} onChange={onchangeNickrNameInput}/><br/>
        <button onClick={onClickResetBtn}>초기화</button>
    </div>
  )
}

export default FuncRef