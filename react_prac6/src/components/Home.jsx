import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>메인 페이지</h1>
      <ul>
        <li>
          <Link to="/about"><button>소개</button></Link>
        </li>
        <li>
          <Link to="/profile/adam"><button>아담으로 이동</button></Link>
        </li>
        <li>
          <Link to="/profile/jessica"><button>제시카로 이동</button></Link>
        </li>
        <li>
          <Link to="/profile/void"><button>없는 이름으로 이동</button></Link>
        </li>
        <li>
          <Link to="/articles"><button>게시글 이동</button></Link>
        </li>
        <li>
          <Link to="/redux"><button>redux 예제로 이동</button></Link>
        </li>

      </ul>


    </div>
  )
}

export default Home