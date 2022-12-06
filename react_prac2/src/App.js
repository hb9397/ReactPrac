import React, { Component, useState, useRef } from 'react';
import UserList from './component/UserList';
import CreateUser from './component/CreateUser';
/* import ErrorBoundary from './component/ErrorBoundary'
import Iteration from './component/Iteration'
import FuncRef from './component/FuncRef';
import FuncEffect from './component/FrucEffect' */

/* // 클래스 형 컴포넌트 state
class ClassState extends Component {

  
  // 생성자를 만들지 않고 초기화가 가능하다.
  state = { // JS 문법이 아님(React에서 사용하는 방식)
    count : 0
  } 
  

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
} */


/* // 함수형 컴포넌트 state
const FucnState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>클릭을 {count}번 수행했습니다.</p>
      <button onClick={(e) => setCount(count + 1)}> 클릭 </button>
    </div>
  )
} */


/* class ClassEffect extends Component{
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
 */


const App = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  })

  const {username, email} = inputs

  const onChangeInput = (e) =>{
    // 2개 이상의 state 속성(배열이나 객체이기 때문)를 수정할 때는 복제한 후 사용해야 한다.
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

   // users 샘플데이터
   // 배열의 데이터를 수정하면 컴포넌트가 리랜더링 될 수 있도록 state로 변환한 것.
   const [users, setUsers] = useState([
    {id: 1, username: "adam", email: "itawe@awef.dcc"},
    {id: 2, username: "eve", email: "few@awef.dcc"},
    {id: 3, username: "군계", email: "mon@awef.dcc"}
  ]);

  // 변수를 생성
  const nextId = useRef(4);

  // 데이터 삽입 함수
  const onCreateBtn = () =>{
    // 하나의 user 객체를 생성
    const user = {
      id: nextId.current,
      username,
      email
    }

    // 생성한 user 객체를 users state에 추가
    setUsers([...users, user]);


    // Input 초기화
    setInputs({
      username:'',
      email:''
    })

    // 다음 Id를 위해서 id값을 1증가
    nextId.current += 1;
  }

  
  return (
    <div>
      <UserList users={users}/>
      <CreateUser username={username} email={email} onChangeInput={onChangeInput} onCreateBtn={onCreateBtn}/>

      {/* <ErrorBoundary>
        <Iteration />
      </ErrorBoundary> */}

      {/* <ClassState />
      <FucnState/>
      <br/>
      <FuncRef/>
      <br/> */}

      {/* <ClassEffect/><br/> */}
      {/* <FuncEffect/> */}
    </div>
  )
}

export default App