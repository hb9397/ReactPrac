import React, { Component } from 'react';
import TEST from './test'

class App extends Component {
  render() {
    const message = "클래스형 컴포넌트 - 과거에 많이 사용함.";
    return (
      <div className='react'>{message}
        <TEST></TEST>
      </div>);
  }
}


export default App;