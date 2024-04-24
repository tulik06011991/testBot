
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null)


 
  
  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        { email: email, password: password },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        },
      );
      
      if (response.data.isAdmin) {
        navigate('/dashboard');
      } else {
        navigate('/menu');
        
      }
      setUserData(response.data)
    } catch (error) {
      console.log(error);
    }
  };

console.log()

  return (
    <div>
      
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form  onSubmit={handleSubmitt} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Login</h1>
            
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
              <input   onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
              <input   onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
            </div>
            
            <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Login</button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
