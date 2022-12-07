import React from 'react'
import styles1 from'../css/CSSModule.module.css'
import classNames from 'classnames/bind'
import styles2 from'../css/SCSSModule.module.scss'


// cx 안에서는 styles 생략하는 것이 가능.
const cx1 = classNames.bind(styles1)
const cx2 = classNames.bind(styles2)

export const CSSModule = () => {
  return (
    <div className={`${styles1.wrapper} ${styles1.inverted}`}>
        처음 사용해보는 
        {/* :global이 적용된 css요소는 클래스네임.적용할 css 형태가 아니라 바로 css요소 이름으로 작성 */}
        <span className='somthing'>CSS Modeule</span>

        <div className={cx1('wrapper', 'inverte')}>
            classnames 라이브러리 사용하기
        </div><br/>

        <span className='somthing'>SCSS Modeule</span>
        <div className={cx2('wrapper', 'inverte')}>
            SCSS 사용해 보기
        </div>
    </div>
  )
}

export default CSSModule