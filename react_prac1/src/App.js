import React, { Component } from 'react'
import TEST from './test'
import STATE from './component/StateClassType'
import USESTATE from './component/StateFuncType'
//import EventPracClass from './component/EventPracClass'
import EventPracFunc from './component/EventPracFunc'
import ValidationSample from './component/ValidationSample'
import ScrollBox from './component/ScrollBox'

const message = " - 클래스형 컴포넌트는 과거에 많이 사용함, 현재는 함수형 컴포넌트를 많이 사용";
class App extends Component {
  render() {
    return (
      <>
        <div> 컴포넌트 {message}</div><br />
        <TEST name="Adam" year={199}>태그 안의 내용 사용하기</TEST>
        <STATE /><br />
        <USESTATE /><br />
        {/* 클래스형 컴포넌트 이벤트 처리 */}
        {/* <EventPracClass/> */}
        <EventPracFunc /><br />
        <ValidationSample /><br />
        <ScrollBox ref={ref => { this.box = ref }} />
        <button onClick={this.box.scrollToBottom}>맨 아래로</button>
      </>
    )
  }
}

export default App