    import React, {useState, useEffect} from 'react'

    const FrucEffect = () => {
        // Class형 컴포넌트 Effect에서 생성자 초기화와 같은 역할
        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log("마운트와 업데이트가 끝나면 호출")
            document.title = `You clicked ${count} times`
        });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={(e) => setCount(count + 1)}>클릭</button>
        </div>
    )
    }

    export default FrucEffect