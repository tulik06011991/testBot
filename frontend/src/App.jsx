import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import Login from './Components/Login'
import {Routes, Route}  from 'react-router-dom'
import Menu from './Components/Menu'



function App() {
 

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element = {<Register/>}/>
    </Routes>
    <Routes>
      <Route path='/login' element = {<Login/>}/>
    </Routes>
    <Routes>
      <Route path='/menu' element = {<Menu/>}/>
    </Routes>
       
    </>
  )
}

export default App
