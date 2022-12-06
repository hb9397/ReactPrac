import React, { Component, useState } from 'react';
import ErrorBoundary from './component/ErrorBoundary'
import Iteration from './component/Iteration'
import FuncRef from './component/FuncRef';
import FuncEffect from './component/FrucEffect'

// 클래스 형 컴포넌트 state
class ClassState extends Component {

  /*
  // 생성자를 만들지 않고 초기화가 가능하다.
  state = { // JS 문법이 아님(React에서 사용하는 방식)
    count : 0
  } 
  */

  // JS 문법에서 생성자를 만들어서 인스턴스를 초기화 하는 방식
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <p>클릭을 {this.state.count} 번 수행</p>
        <button onClick={
          (e) => {
            this.setState({
              count: this.state.count + 1
            })
          }}>
          클릭
        </button>
      </div>
    )
  }
}


// 함수형 컴포넌트 state
const FucnState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>클릭을 {count}번 수행했습니다.</p>
      <button onClick={(e) => setCount(count + 1)}> 클릭 </button>
    </div>
  )
}


class ClassEffect extends Component{
  // 생성자
  constructor(props){
    super(props);
    console.log("가장 먼저 호출되는 메서드")

    this.state = {
      count: 0
    }
  }
    // Component가 Mount된 후 호출되는 메서드
    componentDidMount(){
      console.log("마운트 된 후 호출되는 메서드");
      document.title = `You clicked ${this.state.count} times`
    }

    // component가 Update된 후 호출되는 메서드
    componentDidUpdate(){
      console.log("업데이트 된 후 호출되는 메서드");
      document.title = `You clicked ${this.state.count} time`
    }
    render(){
      return(
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={(e) => this.setState({count: this.state.count + 1})}>클릭</button>
        </div>
      )
    }
}

const App = () => {
  return (
    <div>
      {/* <ErrorBoundary>
        <Iteration />
      </ErrorBoundary> */}

      {/* <ClassState />
      <FucnState/>
      <br/>
      <FuncRef/>
      <br/> */}

      {/* <ClassEffect/><br/> */}
      <FuncEffect/>
    </div>
  )
}

export default App