import React from 'react'
import { useEffect } from 'react'


const User = ({user, onRemoveBtn, onToggle}) => {

    // 마운트 될 때, state가 변경될 때 모두 호출
    // user 객체의 개수가 3개이므로 3개가 두번씩 호출된다.
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');


        // 삽입과 수정시 호출
        // 이 데이터의 id가 존재하면 수정이고 id가 존재하지 않으면 삽입
        console.log(user)

        // 함수를 리턴하면 컴포넌트가 사라질 때 호출
        return () => {
            // 데이터를 삭제한 경우 호출
            console.log("컴포넌트가 사라짐");
            console.log(user);
        }
    }, [])


  return (
    <div>
        <b onClick={(e) => onToggle(user.id)} 
        style={{
            cursor: 'pointer', color: user.active ? 'green' : 'black'}}>{user.username}</b>
        <span>({user.email})</span>
        <button onClick={(e) => onRemoveBtn(user.id)}>삭제</button>
    </div>
  )
}

export const UserList = ({users, onRemoveBtn, onToggle}) => {
  return (
    <div>
        {users.map(user => <User user={user} key={user.id} onRemoveBtn={onRemoveBtn} onToggle={onToggle}/>)}
    </div>
  ) 
}


export default UserList