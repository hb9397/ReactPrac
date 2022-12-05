/* import React from 'react'
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

export default test */

// 클래스 형 컴포넌트

import React, { Component } from 'react';
import PropsType from 'prop-types'

class test extends Component {
  render() {
    //props 가져오기
    const {name, children, year} = this.props;
    return (
      <>
        <div>안녕하세요 제 이름은 {name} 입니다.</div>
        <div>children의 값은 {children} 입니다.</div>
        <div>제가 태어난 년도는 {year} 년입니다.</div>
      </>
    );
  }
}
test.defaultPrprs = {
  name : '기본값'
}

test.propsType = {
  name: PropsType.string,
  year: PropsType.number.isRequired
}
export default test;