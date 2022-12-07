import React from 'react'
import  CSSModule  from './component/CSSModule'

import classNames from 'classnames'
import styles from './App.scss'

import Button from './component/Button'

const cx = classNames.bind(styles)

const App = () => {
  const isBlue = true;


  return (
    <div>
      <Button>버튼</Button>
      {/* <CSSModule/><br/>
      <div className={cx('box', {blue: isBlue})}>
        <div className={cx('box-inside')}/>
      </div>
      <div className={cx('box-inside')}/> */} {/* App.scss에서 box의 자식으로 만들었기 때문에 부모에 box클래스를 가져오지 않는다면 설정되지 않는다. */}
    </div>
  )
}

export default App