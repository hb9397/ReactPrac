import React from 'react'
import { Navigate } from 'react-router-dom'

const MyPage = () => {
    // 임시로 만든 로그인 여부
    const isLoggedIn = false;

    if(!isLoggedIn){
        return <Navigate to="/login" replace={true}></Navigate>
    }

  return (
    <div>
        MyPage
    </div>
  )
}

export default MyPage