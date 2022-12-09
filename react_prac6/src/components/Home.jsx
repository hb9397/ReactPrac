import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>메인 페이지</h1>
        <ul>
          <li>
          <Link to = "/about"><button>소개</button></Link>
          </li>
          <li>
          <Link to = "/profile/adam"><button>이름으로 이동</button></Link>
          <Link to = "/profile/jessica"><button>이름으로 이동</button></Link>
          <Link to = "/profile/void"><button>이름으로 이동</button></Link>
          </li>
        </ul>
        
        
    </div>
  )
}

export default Home