import React from 'react'

const CreateUser = ({username, email, onChangeInput, onCreateBtn}) => {
    
  return (
    
    <div>
        <input name='username' value={username} onChange={onChangeInput} placeholder='이름을 입력하세요.' type='text' />
        <input name='email' value={email} onChange={onChangeInput} placeholder='이메일을 입력하세요' type='text'/>
        <button onClick={onCreateBtn}>추가</button>
    </div>
  )
}

export default CreateUser