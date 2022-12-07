import React from 'react'
import CSSModule from './component/CSSModule'

import classNames from 'classnames'
import styles from './App.scss'

import Button from './component/Button'

import StyledComponent from './component/StyledComponent'

import axios from 'axios'

const cx = classNames.bind(styles)

const App = () => {
  const isBlue = true;


  return (
    <div>
      <StyledComponent />
      <nav>
        <div className='nav-wrapper'>
          <div>
            리액트
          </div>
        </div>
      </nav>
      <div>
        머터리얼 디자인
      </div>
      <Button>버튼</Button>
      <div>
        <button onClick={(e) => {
          let request = new XMLHttpRequest();
          request.open('GET', 'https://jsonplaceholder.typicode.com/users');

          // POST 방식일 때는 send에 파라미터를 대입한다
          request.send('');

          // 데이터를 가져오는데 성공했을 때 load 이벤트 처리
          request.addEventListener('load', () => {
            let data = JSON.parse(request.responseText);
            console.log(data);
          });

          // error 발생했을 때 error 이벤트 처리
          request.addEventListener('error', (error) => {
            console.log(error);
          })
        }}>AJAX를 이용한 데이터 다운로드</button><br />

        <button onClick={(e) => {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err.message))
        }
        }>
          Fetch API를 이용한 데이터 다운로드
        </button><br />

        <button onClick={(e) => {
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
          }}>
          axios 라이브러리를 이용한 데이터 다운로드
        </button>
      </div>
      {/* <CSSModule/><br/>
      <div className={cx('box', {blue: isBlue})}>
        <div className={cx('box-inside')}/>
      </div>
      <div className={cx('box-inside')}/> */} {/* App.scss에서 box의 자식으로 만들었기 때문에 부모에 box클래스를 가져오지 않는다면 설정되지 않는다. */}
    </div>
  )
}

export default App