import axios from 'axios';
import React, { useEffect } from 'react'


const adminFoydalanuvchilar = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        const getUser = async () => {
          try {
            const response = await axios.get(
              'http://localhost:3000/foydalanuvchi/users',
              {
                headers: {
                  'Content-Type': 'application/json',
                  'access_token': token
                },
                withCredentials: true
              }
            );
            localStorage.setItem('userIds', JSON.stringify(response.data.map(user => user.userId)))
           
            console.log(response.data)
          } catch (error) {
            if (error) {
              navigate('/adminpanel')
            }
            console.log(error);
          }
        };
    
        getUser();
      }, []);
    
  return (
    <div><br /><br /><br /><br /><br /><h1>salom</h1></div>
  )
}

export default adminFoydalanuvchilar