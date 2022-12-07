import React, {useState, useMemo} from 'react'

const getAverage = (numbers) => {
    console.log("평균 계산");
    
    if(numbers.length === 0){
        return 0;
    }

    // reduce는 배열을 순회하면서 연산을 수행한 후 하나의 값을 반환한다.
    // 매개변수는 두 개중 첫번째는 수행할 함수이고, 두번째 매개 변수는 연산을 시작할 때의 초기값이다.

    // 두번째 매개변수는 생략이 가능한데 생략되면 배열의 첫번째 요소로 설정된다.

    // 첫번째 매개변수인 함수는 매개변수를 4개까지 갖을 수 있는데, 첫번째는 누적값, 두번째는 배열의 요소, 세번째는 배열의 인덱스, 네번째는 배열이다.

    // 아래의 예시를 들면 배열 [10, 20, 30, 40] 이있을 때
    // 1회 (10 + 20), 2회 (30 + 30), 3회 (60 + 40)  100을 반환
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const AverageUseMemo = () => {

    const [list, setList] = useState([]);
    const[number, setNumber] = useState('');

    // Input의 내용을 수정할 때 호출될 메서드
    const onChangeInput = (e) => {
        setNumber(e.target.value)
    }

    // 추가를 눌렀을 때 배열에 삽입하는 함수
    const onClickInsertBtn = (e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('')
    }

    // useMemo를 사용해서 getAverage 호출부를 부르도록 수정하면 input에 연결된 state의 값이 변경될 때마다 호출되는 것이 아니라
    // 값이 바뀌었을 때만 호출하도록 한다.
    const  calcAvg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
        <input value={number} onChange={onChangeInput}/>
        <button onClick={onClickInsertBtn}>추가</button>

        <ul>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
        <div>
            {/* <b>useMemo 없이 평균 구하기:</b>{getAverage(list)}<br/> */}
            <b>useMemo 를 통해 평균 구하기:</b>{calcAvg}
        </div>
    </div>
  )
}

export default AverageUseMemo