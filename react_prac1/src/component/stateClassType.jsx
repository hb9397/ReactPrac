import React, { Component } from 'react'

class stateClassType extends Component {
    // 생성자에서 초기화 하기
    constructor(props) {
        // 상위 클래스의 생성자 호출
        super(props);

        // 제어하고자 하는 state 생성
        this.state = {
            number: 0
        }
    }

    //state = {number: 0}; // 생성자 사용하지 않고 초기화 하기

    render() {
        return (
            <>
                <p>
                    숫자 : {this.state.number}
                </p>
                <button onClick={(e) => {
                    // this.setState({number: this.state.number + 1})
                    /* this.setState(
                        prevState => {return{number: prevState.number + 1}}
                    ) */
                    this.setState(
                        { number: this.state.number + 1 },
                        () => {
                            console.log('State의 값이 변경됨');
                            console.log(this.state);
                        }
                    )
                }}>
                    증가
                </button>
            </>
        )
    }
}

export default stateClassType;