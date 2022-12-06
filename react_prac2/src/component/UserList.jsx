import React from 'react'

const User = ({user, onRemoveBtn, onToggle}) => {
  return (
    <div>
        <b onClick={(e) => onToggle(user.id)} 
        style={{
            cursor: 'pointer', colror: user.active ? 'green' : "black"}}>{user.username}</b>
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