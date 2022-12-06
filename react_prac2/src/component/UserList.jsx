import React from 'react'

const User = ({user, onRemoveBtn}) => {
  return (
    <div>
        <b>{user.username}</b>
        <span>({user.email})</span>
        <button onClick={(e) => onRemoveBtn(user.id)}>삭제</button>
    </div>
  )
}

export const UserList = ({users, onRemoveBtn}) => {
  return (
    <div>
        {users.map(user => <User user={user} key={user.id} onRemoveBtn={onRemoveBtn}/>)}
    </div>
  ) 
}


export default UserList