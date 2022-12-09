import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Profile from './components/Profile'
import Article from './components/Article'
import Articles from './components/Articles'
import Layout from './components/Layout'
import Login from './components/Login'
import MyPage from './components/MyPage'
import ColorBox from './components/ColorBox'

import ReduxExam from './components/ReduxExam'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>

      <Route path='/mypage' element={<MyPage/>}></Route>

      <Route element={<Layout />}>

        <Route index element={<Home />}></Route>

        <Route path='/about' element={<About />}></Route>

        <Route path='/profile/:username' element={<Profile />}></Route>

      </Route>

      <Route path='/articles' element={<Articles/>}>
        
        <Route path=':id' element={<Article/>} />

      </Route>

      <Route path='/colorbox' element={<ColorBox/>}></Route>
      
      <Route path = '/redux' element={<ReduxExam/>}></Route>

      <Route path='*' element={<Home/>}> </Route>
    </Routes>
  )
}

export default App