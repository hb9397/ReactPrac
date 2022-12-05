import React, { Component } from 'react'

class EventPrac extends Component {
    /* state = {
        name : '',
        btnAble : true
    } */

    constructor(props){
        super(props);
        this.changeInput = this.changeInput.bind(this);
        this.btnAble = this.btnAble.bind(this);
    }

    render() {
        const changeInput = (e) => {
            this.setState({name: e.target.value})
            this.setState({btnAble: false})
        }

        const btnOnClick = (e) => {
            alert(this.state.name);
            this.setState({
                name: "",
                btnAble: true
            })
        }

        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type='text' name='message' placeholder='이름을 입력하세요' value={this.state.name}
                    onChange={this.changeInput}>
                </input>
                <button disabled = {this.state.able} onClick={this.btnOnClick}>확인</button><br/>
                <textarea value={this.state.name} cols="30" rows="10"></textarea>
            </div>
        )
    }
}

export default EventPrac;