import React, { Component } from 'react'

class Iteration extends Component {
    //const names = ['Java Script', 'JAVA', 'Python', 'C#', 'GO', 'Rust'];

    // 내용이 변경되면 컴포넌트를 리랜더링 하는 State를 생성한 것
    state = {
        names: ['Java Script'],
        name: ''
    }

    // input 에 입력하면 name state의 값을 변경하는 이벤트 처리 함수
    onChangeInput = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    // 버튼을 누르면 name의 값을 names에 추가하는 함수
    // push 대신에 배열을 복제해서 연결하는 concat 함수 사용
    onClickInsertBtn = (e) => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        })
    }

    // 데이터 삭제 함수
    // index를 매개변수로 받아서 삭제
    onClickRemove = (index) => {

        // 예, 아니오로 대답할 수 있는 다이알로그 메시지 출력, 예면 true 아니오면 false를 반환
        let result = window.confirm("정말로 삭제");
        
        if(result === false){
            // 취소를 누를시 그냥 제어를 반환함.
            // 아무일 도 없다.
            return;
        }

        // 중괄호 안의 것은 객체에서 실제로 가져온다는 뜻
        const {names} = this.state;

        // slice - 매개변수 2개 받아서 배열을 잘라내서 복제해 반환하는 함수
        // 매개 변수는 시작 위치와 마지막 위치를 대입
        /* this.setState({
            names: [names.slice(0, index),
            names.slice(index+1, names.length)]
        }) */

        // 넘어온 인덱스와 배열의 인덱스가 다른 것 만 추출한다.(삭제효과)
        this.setState({
            names: names.filter((item, e) => e !== index)
        })
    }


    render() {
        const nameList = this.state.names.map(
            (name, index) =>
                <li key={index}>
                    {name}
                    <button onClick={(e) => this.onClickRemove(index)}>삭제</button>
                </li>);

        return (
            <div>
                {this.satate.Err.value} {/* 컴파일러에 보이지 않지만 브라우저에서는 학인 할 수 있는 에러 */} 

                <input onChange={this.onChangeInput} value={this.state.name}/>
                <button onClick={this.onClickInsertBtn}>추가</button>
                <ul>{nameList}</ul>
            </div>
        )
    }
}

export default Iteration;