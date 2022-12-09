import React from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'qs'

const About = () => {

    // 쿼리 스트링을 읽을 수 있는 훅 생성
    const location = useLocation();

    const queryString = qs.parse(location.search,{
        // ? 를 제외할 수 있는 옵션
        ignoreQueryPrefix:true
    })
    console.log(queryString);
    
    return (
        <div>
            <h1>React Router 실습</h1>
            <p>Query String: {location.search}</p>
        </div>
    )
}

export default About