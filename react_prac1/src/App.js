import React, {Component} from 'react';

class App extends Component{
  render(){
    const message = "클래스형 컴포넌트 - 과거에 많이 사용함.";
    return <div className='react'>{message}</div>
  }
}

export default App;