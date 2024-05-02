import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';



const DeleteAnswer = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/')// Foydalanuvchi Login sahifasiga yo'naltiriladi
        }
      }, []);
    const handleClearLocalStorage = () => {
        const token = localStorage.getItem('token');
        axios.delete('http://localhost:3000/test/deleteJavoblar',
        {
            headers: {
              'Content-Type': 'application/json',
              'access_token': token
            },
            withCredentials: true
          },)
          .then(response => {
            setMessage(response.data); // Log the response from the server
            
          })
          .catch(error => {
            console.error('Xatolik:', error); // Log any errors
          });
      };
  return (
    <div><br /><br /><br /><br /><br /><br /><br />
    <h1>  {message && (
        <>
        hamma javoblar o'chirildi</>
    )} </h1>
    
    
    <button className='bg-blue-300  py-2 px-4 w-full hover:bg-blue-500 text-white' onClick={handleClearLocalStorage}>
    <Link to={'/'}>Orqaga</Link>
  </button></div>
  )
}

export default DeleteAnswer