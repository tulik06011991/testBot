
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
import AdminSavol from './Components/admin/AdminSavol'
import AdminPanel from './Components/admin/AdminPanel'


import UserContextProvider from './Components/userContextProvider'
import DeleteAnswer from './Components/admin/DeleteAnswer'


function App() {

  return (
    
    <>
    <UserContextProvider>


    <Navbar/>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/register' element = {<Register/>}/> 
      <Route path='/menu' element = {<Menu/>}/>  
      <Route path='/tarix' element = {<Tarix/>}/>    
      <Route path='/inglizTili' element = {<Ingliz_tili/>}/>   
      <Route path='/biologiya' element = {<Biologiya/>}/>  
      <Route path='/javob' element = {<Javob/>}/>    
      <Route path='/logout' element = {<Logout/>}/>
      <Route path='/adminsavol' element = {<AdminSavol/>}/> 
      <Route path='/adminpanel' element = {<AdminPanel/>}/>
      <Route path='/deleteanswer' element = {<DeleteAnswer/>}/>
    </Routes>  
    </UserContextProvider>
       
    </>
  )
}

export default App
