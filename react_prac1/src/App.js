import React from 'react'
import TEST from './test'
import STATE from './component/StateClassType'
import USESTATE from './component/StateFuncType'


const App = () => {
  const message = " - 클래스형 컴포넌트는 과거에 많이 사용함, 현재는 함수형 컴포넌트를 많이 사용";
  return (
    <>
    <div> 컴포넌트 {message}</div><br/>
    <TEST name = "Adam" year = {199}>태그 안의 내용 사용하기</TEST>
    <STATE></STATE><br></br>
    <USESTATE/>
    </>
  )
}

export default App