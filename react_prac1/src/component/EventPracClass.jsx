import React, { Component } from 'react'

class EventPracClass extends Component {
    state = {
        name : '',
        message: '',
        btnAble : true
    }

    render() {
        const changeInput = (e) => {
            this.setState({
                // 이벤트가 발생한 객체는 e.target
                // e.target.name은 이벤트가 발생한 객체의 name
                [e.target.name]: e.target.value
            })
            this.setState({btnAble: false})
        }

        const btnOnClick = (e) => {
            alert(this.state.name + ":" + this.state.message);
            this.setState({
                name: "",
                message: ''
            })
            this.setState({btnAble: true})
        }

        const inputKeyPress = (e) =>{
            if(e.key === 'Enter'){
                btnOnClick();
            }
        }

        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type='text' name='name' placeholder='이름을 입력하세요' value={this.state.name}
                    onChange={changeInput} onKeyPress={inputKeyPress}>
                </input>
                <textarea value={this.state.name} cols="13" rows="1"></textarea><br/>

                <input type='text' name='message' placeholder='메시지를 입력하세요' value={this.state.message}
                    onChange={changeInput} onKeyPress={inputKeyPress}>
                </input>
                <textarea value={this.state.message} cols="13" rows="1"></textarea><br/>

                <button disabled = {this.state.btnAble} onClick={btnOnClick}>확인</button><br/>
                
            </div>
        )
    }
}

export default EventPracClass;