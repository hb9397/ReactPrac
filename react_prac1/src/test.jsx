import React from 'react'
import PropTypes from 'prop-types'

// 구조 분해 할당으로 매개 변수 가져오는 순서는 상관이 없음
const test = ({name, children, year}) => {

  return (
    <>
      <div>나의 컴포넌트 이름음 {name} 이고 {year}년에 태어났습니다.</div><br/>
      <div>{children}</div>
    </>
  )
};

test.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number.isRequired
}

test.defaultProps = {name : '기본값'}

export default test