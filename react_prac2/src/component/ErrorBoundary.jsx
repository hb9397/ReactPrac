import { render } from '@testing-library/react'
import React, {Componenet} from 'react'

class ErrorBoundary extends Componenet{
    state = {
        error: false
    }
    // 컴포넌트에서 예외가 발생하면 호출되는 메서드
    componentDidCatch(error, info) {
        this.state = {
            
        }
    }

    render(){
        if(this.state.error){
            // error가 true 이면 출력
            return <div>에러가 발생했습니다.</div>
        }else{
            // error가 false이면 하위 컴포넌트 출력
            return this.props.children
        }

    }
}
export default ErrorBoundary