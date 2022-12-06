import React from 'react'

const Iteration = () => {
    const names = ['Java Script', 'JAVA', 'Python', 'C#', 'GO', 'Rust'];

    // 배열 names를 순회(각 요소를 차례대로) 하면서 <li>태그로 감싸 nameList에 반환
    const namesList = names.map((name, index) => <li key={index}>{name}</li>)

    return (
        <ul>
            {namesList}
        </ul>
    )
}

export default Iteration;