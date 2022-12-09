import React, {useState, useCallback, useRef} from 'react'
import immer from 'immer'

const App = () => {
  // 컴포넌트 안에서 사용할 변수 생성
  const nextId = useRef(1);

  const [form, setForm] = useState({
    name : "",
    username: ""
  }); 

  const [data, setData] = useState({
    array: [],
    useLessValue: null
  });

/*   // input에 입력받는 경우 입력하는 데이터가 변경될 때 state를 수정해줄 함수
  const onChangeInput = useCallback((e) => {
    // state가 하나 일 때는 state이름 : e.target.value 로 작성하지만 여러개일 때는 아래와 같이 작성한다.
    setForm({
      ...form,
      [e.target.name]: [e.target.value] 
    })
  }, [form]) // 보통 비워둘 때 경고가 발생하는데, setter로 변경하는 data를 대입하면 사라진다(상관은 없음)
 */

  const onChangeInput = useCallback((e) => {
    setForm(
      //draft가 form의 복제본이 되고 draft를 수정하면 immer가 알아서 form에 전송한다.
      immer(draft => {
        draft[e.target.name] = e.target.value;
      })
    )
  })

  // 입력받은 데이터를 등록하는 함수로 form에서 submit 이벤트가 발생될 때 호출되는 함수
  // 컴포넌트 안에서 함수를 만들 때, 특별한 경우가 아니면 useCallback안에 만드는 것이 좋다.
  // useCallback을 이용하게 되면 두번째 매개변수인 deps 배열안의 데이터가 변경되는 경우만 새로 만들어지기 때문이다.
  // useCallback을 사용하지 않으면 컴포넌트가 리랜더링 될 때 마다 컴포넌트 내부의 함수도 새롭게 만들어진다.
  /* const onSubmitData = useCallback((e) => {
    // 기본제공 하는 이벤트를 수행하지 않도록 하는 것인데, a 태그를 이용한 이동이나 form의 submit이나 reset 이벤트는 화면 전체를 새로 생성한다.
    // 이 경우 이전에 가지고 있던 내용을 모두 삭제한다, 
    // 하지만 reac, angular, vue는 SPA Frame work 라서 화면전체를 다시 랜더링 하면 기본틀이 무너진다. --> SPA를 사용하는 이유가 없어짐
    // 화면의 출력 내용과 가상의 DOM을 비교해서 변경된 부분만 리랜더링 하기 때문이다.
    e.preventDefault();

    const info = {
      id: nextId,
      name: form.name,
      username: form.username
    }

    setData({
      ...data,
      array: data.array.concat(info)
    }) // data state에 array 배열에 info 객체에 입력된 현재 값을 복사해서 추가한다.

    setForm({
      name: '',
      username: ''
    }); // form에 연결된 입력 값 state 초기화
    
    nextId.current += 1; // 다음에 입력할 데이터의 id값
    console.log("!")
  }, [data, form.name, form.username]); // deps 배열에 data, form.name, form.username의 데이터가 변경될 때만 해당 함수 호출 */

  const onSubmitData = useCallback((e) => {
    e.preventDefault();

    const info = {
      id: nextId,
      name: form.name,
      username: form.username
    }

    // data를 draft에 깊은 복사를 하고 draft에 작업을 수행한 후 다시 data에 복제한다.
    setData(immer(draft => {
      draft.array.push(info);
    }));

    setForm({
      name: '',
      username: ''
    });

    nextId.current = nextId + 1;
  })


  // 데이터를 삭제하는 함수
  /* const onClickRemove = useCallback((e) => {
    setData({
      ...data,
      array: data.array.filter(info => info.id !== e)
    })

  }, [data]); */

  const onClickRemove = useCallback((e) => {
    setData(immer(draft =>{
      draft.array.splice(
        draft.array.findIndex(info => info.id === e), 1)}
        ))
  });
  

  return (
    <div>
      <form onSubmit={onSubmitData}>
        <input name='username' placeholder='아이디를 입력하세요.' value={form.username} onChange={onChangeInput}></input>
        <input name='name' placeholder='이름을 입력하세요.' value={form.name} onChange={onChangeInput}></input>
        <button type='submit'>등록</button>
      </form>

      <div>
        {/* 항상 배열을 화면에 뿌릴 때는 map함수 사용 */}
        <ul>
          {data.array.map(info => (
            <li key={info.id}>
              {info.username} ({info.name})
              <button onClick={() => onClickRemove(info.id)}>삭제</button>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
