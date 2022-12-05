import React, {useState} from 'react'

const EventPracFunc = () => {

    // 함수형 컴포넌트 useState 생성방법 1
    /* const [inputName, setInputName] = useState('');
    const [inputMessage, setInputMessage] = useState(''); */

    // 함수형 컴포넌트 useState 생성방법 2
    const [form, setForm] = useState({
        username:'',
        message:'',
    })

    const [btnAble, setBtnAble] = useState(true)

    const onChangeInput = (e) => {
        // form을 바로 변경하는 것이 아니라 form 을 복제해서 e.target.value에 해당되는 속성만 e.target.value로 수정
        // react 에서 state를 수정할 때 복제해서 수정한다.
        // 하나의 항목으로 만들어진 데이터는 바로 수정하면 되지만 여러 항복으로 구성된 객체나 배열은 항상 복제해서 수정한다.
        // JS 에서 객체와 배열을 복제한 후 작업하는 방법에 대해서 알아두어야 한다.
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm)
        setBtnAble(false)
    }

    // 버튼 클릭 이벤트
    const onClickBtn = (e) => {
        alert(form.username + ":" + form.message)
        setForm({
            username: "",
            message: ""
        })
    }

    // Enter KeyPress 이벤트
    const onKeyPressEnter = (e) => {
        onClickBtn();
    }

  return (
    <>
        <input type = 'text' name = 'username' placeholder='이름을 입력하세요.' value={form.username} onChange={onChangeInput} onKeyPress={onKeyPressEnter}/>
        <textarea value={form.username}></textarea><br/>

        <input type = 'text' name = 'message' placeholder='메시지를 입력하세요' value={form.message} onChange={onChangeInput} onKeyPress={onKeyPressEnter}/>
        <textarea value={form.message}></textarea><br/><br/>
        <button disabled={btnAble} onClick={onClickBtn}>확인</button>
    </>
  );
}

export default EventPracFunc