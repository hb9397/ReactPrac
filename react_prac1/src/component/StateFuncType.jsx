
import React, { useState } from 'react'

const StateFuncType = () => {
    var [count, setCount] = useState(0);

    var [color, setColor] = useState('white')

    const countPlus = (e) => {
        setCount(count = count +1);
    }

    const changeBtnColorRed = (e) => {
        setColor('red');
    }

    return (
        <div>
            <p>
                숫자 : {count}
            </p>
            <button onClick={countPlus}>
                증가
            </button>

            <button style={{backgroundColor : color}} onClick={changeBtnColorRed}>
                색 변경
            </button>
        </div>
    )
}

export default StateFuncType