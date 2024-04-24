
import './index.css'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import Login from './Components/Login'
import {Routes, Route}  from 'react-router-dom'
import Menu from './Components/Menu'
import Biologiya from './Components/Savollar/Biologiya';
import Tarix from './Components/Savollar/Tarix';
import Ingliz_tili from './Components/Savollar/Ingliz_tili'
import Javob from './Components/Savollar/Javob'
import Logout from './Components/Logout'
import UserContextProvider from './Components/userContextProvider'


function App() {
  return (
    
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Login/>}/>
    </Routes>

    <Routes>
      <Route path='/register' element = {<Register/>}/>
    </Routes>
    <Routes>
      <Route path='/menu' element = {<Menu/>}/>
    </Routes>
    <Routes>
      <Route path='/tarix' element = {<Tarix/>}/>
    </Routes>
    <Routes>
      <Route path='/inglizTili' element = {<Ingliz_tili/>}/>
    </Routes>
    <Routes>
      <Route path='/biologiya' element = {<Biologiya/>}/>
    </Routes>
    <Routes>
      <Route path='/javob' element = {<Javob/>}/>
    </Routes>
    <Routes>
      <Route path='/logout' element = {<Logout/>}/>
    </Routes>
   
       
    </>
  )
}

export default App
