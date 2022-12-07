import React from 'react'
import styles from '../css/Button.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

// Props를 받아온 것 중 children으로 넘겨준 것은 children으로 받고 나머지는rest 로 받는다.
const Button = ({children, ...rest}) => {
  return (
    <div className={cx('button')}{...rest}>
        {children}
    </div>
  )
}

export default Button