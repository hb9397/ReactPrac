import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Profile from './components/Profile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profile/:username' element={<Profile/>}></Route>
    </Routes>
  )
}

export default App