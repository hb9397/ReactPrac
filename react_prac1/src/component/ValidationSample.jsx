import React, {Component} from "react";
import '../css/ValidationSample.css'

class ValidationSample extends Component {
    // Ref(다른 DOM 객체를 참조할 수 있는 속성) 생성
    // ipnut = React.createRef();


    // 클래스 안의 멤버 변수나 함수 안의 지역 변수와 유사하다.
    // 차이점으로는 state는 바로 적용된다.
    state = {
        password: '',
        clicked: false,
        vaildated: false
    };

    // 버튼 눌렀을 때
    onClickBtn  = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })

        // input이 참조하는 객체에 focus를 설정
        // createRef 함수로 만든 경우 focus()
        // this.input.current.focus();

        this.input.focus();
    }

    // input의 입력값을 변경했을 때 처리
    // 자신의 name과 동일한 state를 입력한 값으로 변경한다.
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <input type = 'password' value={this.state.password} name = 'password'
                className = {this.state.clicked ? this.state.vaildated ? 'success' : 'failure' : ''}
                onChange={this.onChangeInput} ref={ref => {this.input = ref}}/><br/>
                <button onClick={this.onClickBtn}>검증하기</button>
            </div>
        )    
    }
}

export default ValidationSample